import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { SignUp } from "./components/sign-up";
import { UsersList } from "../src/components/users/users-list";
import * as router from "./utils/check-routes";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 10000,
		},
	},
});

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<router.AuthRoutes />}>
						<Route path="/users-search" element={<UsersList />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};
