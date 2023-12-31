import React from "react";
import { useLocation, BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { AuthProvider } from "./context/authContext";
import Login from "./page/Login";
import Tickets from "./page/Tickets";
import Overview from "./page/Overview";
import TicketsDetail from "./page/TicketsDetail";
import Page404 from "./page/Page404";
import Unauthorized from "./page/Unauthorized";
import { useTranslation } from "react-i18next";

const PrivateRoute = ({ allowedRoles }) => {
  const { role, isLogin } = useAuth();
  const location = useLocation();
  return isLogin ? (
    allowedRoles.includes(role) ? (
      <Outlet />
    ) : (
      <Navigate to={"/unauthorized"} state={{ from: location }} replace />
    )
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

function AppRouter() {
  const { i18n } = useTranslation();
  const [, setLanguage] = React.useState(i18n.language);

  React.useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* Admin and Guest Route */}
        <Route element={<PrivateRoute allowedRoles={["admin", "guest"]} />}>
          <Route path="/tickets" element={<Tickets />} />
        </Route>
        {/* Admin Route */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/tickets/:id" element={<TicketsDetail />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
