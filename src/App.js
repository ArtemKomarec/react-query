import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { SignUp } from "./components/sign-up";
import { UsersList } from "./components/users-list";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 10000,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/users-search" element={<UsersList />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
