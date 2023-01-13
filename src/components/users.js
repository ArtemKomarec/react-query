import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USERS_API } from "../constants";
import useDebounce from "./debounce";

export const GetUsersQuery = (search) => {
	const debouncedSearchValue = useDebounce(search, 500);

	const {
		isLoading,
		error,
		data: usersList,
		isFetching,
	} = useQuery({
		queryKey: ["users", debouncedSearchValue],
		queryFn: async () => {
			if (debouncedSearchValue) {
				const {
					data: { items },
				} = await axios.get(`${USERS_API + search}`);
				console.log({ data: { items } });
				return { items };
			}
			return { items: [] };
		},
		enabled: Boolean(search),
	});
	return { isLoading, error, usersList, isFetching };
};
