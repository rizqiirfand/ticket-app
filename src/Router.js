import React from "react";
import { useLocation, BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { AuthProvider } from "./context/authContext";
import Login from "./page/Login";
import Tickets from "./page/Tickets";
import Overview from "./page/Overview";
import TicketsDetail from "./page/TicketsDetail";

const Custom404 = () => <div>Error Page 404</div>;
const Unauthorized = () => <div>Unauthorized</div>;

const PrivateRoute = ({ allowedRoles }) => {
  const { role, isLogin } = useAuth();
  const location = useLocation();
  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : isLogin ? (
    <Navigate to={"/unauthorized"} state={{ from: location }} replace />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          {/* Admin Route */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets/:id" element={<TicketsDetail />} />
          </Route>
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRouter;
