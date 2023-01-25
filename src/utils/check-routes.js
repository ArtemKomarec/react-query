import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./service";

const token = getToken();

export const AuthRoutes = () => {
	return token ? <Outlet /> : <Navigate to="/login" />;
};
