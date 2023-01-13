import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { USERS_API } from "../constants";
import { UsersSearch } from "./users-search";
import React from "react";
import useDebounce from "./debounce";

export const UsersList = () => {
	const [search, setSearch] = useState("");
	const debouncedSearchValue = useDebounce(search, 500);
	const { error, data, isFetching } = useQuery({
		queryKey: ["users", debouncedSearchValue],
		queryFn: async () => {
			const result = await axios.get(`${USERS_API + search}`);
			console.log(result);
			return result;
		},
		enabled: Boolean(search),
	});

	const showUserInfo = (userId) => {
		console.log("a");
		console.log(userId);
	};

	return (
		<div className="px-20 ">
			<UsersSearch search={search} setSearch={setSearch} />
			{isFetching && <p>Loading</p>}
			{error && <p>Error - {error.message}</p>}
			{search && data && (
				<div className="flex flex-row gap-10">
					<div className="grid grid-cols-4 justify-center gap-5">
						{data.data.items.map((user) => (
							<div
								className="my-[12px] p-8 flex flex-col gap-4 border-2 border-cyan-400"
								key={user.id}
							>
								<div className="flex row gap-5">
									<img
										src={user.avatar_url}
										alt={user.login + " " + user.id}
										className="w-36"
									/>
									<p> Username: {user.login}</p>
								</div>
								<div
									className=" py-2 border-2 border-sky-500 bg-white text-center text-sky-500 cursor-pointer
									hover:bg-sky-500 hover:text-white "
									onClick={() => showUserInfo(user.id)}
								>
									Show profile
								</div>
							</div>
						))}
					</div>
					<div className="h-[800px] my-[12px] border-2 border-cyan-400 "></div>
				</div>
			)}
		</div>
	);
};
