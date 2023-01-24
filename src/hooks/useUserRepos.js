import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USER_INFO } from "../constants";

export const UseUserRepos = (username) => {
	const {
		isLoading: reposLoading,
		error,
		data: repos,
	} = useQuery({
		queryKey: ["userRepos", username],

		queryFn: async () => {
			const result = await axios.get(
				`${USER_INFO}/${username}/repos?per_page=100`,
				{
					owner: username,
					per_page: 100,
				}
			);
			console.log("repos", result);
			return result;
		},
		enabled: !!username,
	});

	return { reposLoading, error, repos };
};
