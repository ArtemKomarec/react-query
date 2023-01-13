import { useState } from "react";
import { UsersSearch } from "./users-search";
import React from "react";
import { GetUsersQuery } from "./users";
import { Pagination } from "./pagination";

export const UsersList = () => {
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);

	const { isLoading, error, usersList, isFetching } = GetUsersQuery(search);

	const indexOfLastCard = currentPage * postsPerPage;
	const indexOfFirstCard = indexOfLastCard - postsPerPage;
	let currentPosts;
	let pagesList = [];

	if (usersList) {
		currentPosts = usersList.items.slice(indexOfFirstCard, indexOfLastCard);
		for (
			let i = 1;
			i <= Math.ceil(usersList.items.length / postsPerPage);
			i++
		) {
			pagesList.push(i);
		}
	}

	const showUserInfo = (userId) => {
		console.log(userId);
	};

	return (
		<div className="py-10 px-10 flex flex-col items-center">
			{/* {console.log(currentPosts, usersList)} */}
			<UsersSearch search={search} setSearch={setSearch} />{" "}
			{isLoading && isFetching && <p>Loading</p>}
			{error && <p>Error - {error.message}</p>}
			{search && currentPosts && (
				<div className="flex flex-row gap-10">
					<div className="grid grid-cols-4 justify-center gap-5">
						{currentPosts.map((user) => (
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
									className="py-2 border-2 border-sky-500 bg-white text-center text-sky-500 cursor-pointer
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
			<Pagination pagesList={pagesList} setCurrentPage={setCurrentPage} />
		</div>
	);
};
