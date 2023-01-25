import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USER_INFO } from "../utils/constants";

export const UseUserInfo = (username) => {
	const {
		isLoading,
		error,
		data: user,
	} = useQuery({
		queryKey: ["userInfo", username],
		queryFn: async () => {
			const { data } = await axios.get(`${USER_INFO}/${username}`);
			console.log(data);
			return data;
		},
		enabled: !!username,
	});

	return { isLoading, error, user };
};
