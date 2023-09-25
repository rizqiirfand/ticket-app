import React from "react";
import {
  useNavigate,
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import App from "./App";
import { useAuth } from "./hooks/useAuth";
import { AuthContext, AuthProvider } from "./context/auth/authContext";
import Login from "./page/Login";

const Homepage = () => <div>Homepage</div>;
const Events = () => <div>Event</div>;
const Custom404 = () => <div>Error Page 404</div>;
const Unauthorized = () => <div>Unauthorized</div>;

const PrivateRoute = ({ allowedRoles }) => {
  const { role, isLogin } = useAuth();
  const location = useLocation();
  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : isLogin ? (
    <Navigate to={"unauthorized"} state={{ from: location }} replace />
  ) : (
    <Navigate to={"login"} state={{ from: location }} replace />
  );
};

function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          {/* Admin Route */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/homepage" component={<Homepage />} />
            <Route path="/events" element={<Events />} />
          </Route>
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRouter;
