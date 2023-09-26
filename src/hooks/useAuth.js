import { useContext } from "react";
import { loginWithEmailApi } from "../api/authAPI";
import { AuthContext } from "../context/auth/authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const [state, dispatch] = context;

  const loginWithEmail = (email, password) => {
    dispatch({ type: "SET_LOADING", payload: true });
    return loginWithEmailApi(email, password)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        dispatch({ type: "SET_AUTH", payload: { isLogin: true, role: res.data.role } });
        return res;
      })
      .catch((err) => {
        dispatch({ type: "SET_LOADING", payload: false });
        return err;
      });
  };

  const loginWithToken = (email, password) => {
    dispatch({ type: "SET_LOADING" });
    loginWithEmailApi(email, password)
      .then(() => alert("success"))
      .catch(() => alert("fail"));
  };

  const logout = () => {
    dispatch({ type: "UNSET_AUTH" });
  };

  return {
    role: state?.role,
    isLogin: state?.isLogin,
    authLoad: state?.authLoad,
    loginWithEmail,
    loginWithToken,
    logout,
  };
};
