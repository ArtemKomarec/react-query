import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USERS_API } from "../utils/constants";
import useDebounce from "./useDebounce";

export const GetUsersQuery = (search) => {
	const debouncedSearchValue = useDebounce(search, 500);

	const {
		isLoading,
		error,
		data: usersList,
		isFetching,
	} = useQuery({
		queryKey: ["usersList", debouncedSearchValue],
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
		enabled: !!search,
	});
	return { isLoading, error, usersList, isFetching };
};
