import React, { createContext, useReducer, useMemo } from "react";

const initialAuthState = { role: "", isLogin: false, authLoad: false };

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, authLoad: action.payload };
    case "SET_AUTH":
      return { ...action.payload, authLoad: false };
    case "UNSET_AUTH":
      return initialAuthState;
    default:
      return initialAuthState;
  }
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <AuthContext.Provider value={value} {...props} />;
};

export const AuthContext = createContext();
