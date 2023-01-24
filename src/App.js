import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { SignUp } from "./components/sign-up";
import { UsersList } from "./components/users-list";
import { API } from "./constants";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 10000,
		},
	},
});

export const App = () => {
	const [authUser, setAuthUser] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			const token = localStorage.getItem("token");

			try {
				if (token) {
					await axios.get(`${API}/messages`, {
						headers: { Authorization: `Bearer ${token}` },
					});
					setAuthUser(true);
				}
			} catch (e) {
				if (e.response.status === 401) {
					setAuthUser(false);
				}
			}
		};
		checkAuth();
	}, []);

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
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					{routes.map((route, index) => (
						<Route
							path={route.path}
							element={route.component}
							key={route.path + index}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};
