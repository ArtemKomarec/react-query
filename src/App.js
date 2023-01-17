import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
			<UsersList />
		</QueryClientProvider>
	);
}

export default App;
