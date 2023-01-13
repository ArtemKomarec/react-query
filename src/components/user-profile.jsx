import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USERS_API } from "../constants";

export const UserProfile = () => {
	const {
		isLoading,
		error,
		data: user,
	} = useQuery({
		queryKey: ["personalData"],
		queryFn: async () => {
			const result = await axios.get(`${USERS_API}/ArtemKomarec`);
			return result;
		},
	});

	if (isLoading) return <p>Loading</p>;

	if (error) return <p>Error - ${error.message}</p>;

	return (
		<div>
			<img style={{ width: 150 }} src={user.data.avatar_url} />
			{console.log(user.data)}
			<h1> Name </h1>
			<h2>{user.data.login}</h2>
			<h3>Repositories </h3>
			<h4>{user.data.public_repos}</h4>
			<p> Id - {user.data.id}</p>
		</div>
	);
};
