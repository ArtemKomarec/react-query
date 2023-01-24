import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { SignUp } from "./components/sign-up";
import { UsersList } from "./components/users-list";
import { API } from "./constants";

export const App = () => {
	const [authUser, setAuthUser] = useState(true);
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	useEffect(() => {
		const checkAuth = async () => {
			try {
				console.log(token);
				if (token) {
					await axios.get(`${API}/messages`, {
						headers: { Authorization: `Bearer ${token}` },
					});
					setAuthUser(true);
					navigate("/users-search");
				} else {
					setAuthUser(false);
					navigate("/login");
				}
			} catch (e) {
				if (e.response.status === 401) {
					setAuthUser(false);
					navigate("/login");
				}
			}
		};
		checkAuth();
	}, []);

	console.log(authUser);

	const notAuthRoutes = [
		{ path: "*", component: <Login /> },
		{ path: "/", component: <Home /> },
		{ path: "/login", component: <Login /> },
		{ path: "/sign-up", component: <SignUp /> },
	];

	const authRoutes = [
		{ path: "*", component: <Home /> },
		{ path: "/", component: <Home /> },
		{ path: "/users-search", component: <UsersList /> },
	];

	const routes = authUser ? authRoutes : notAuthRoutes;

	return (
		<Routes>
			{routes.map((route, index) => (
				<Route
					path={route.path}
					element={route.component}
					key={route.path + index}
				/>
			))}
		</Routes>
	);
};
