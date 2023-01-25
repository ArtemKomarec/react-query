import { useState } from "react";
import { UsersSearch } from "./users-search";
import React from "react";
import { GetUsersQuery } from "../../hooks/useUsersList";
import { Pagination } from "../pagination";
import { UserProfile } from "./user-profile";
import { Audio } from "react-loader-spinner";
import { Header } from "../header";

export const UsersList = () => {
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);
	const [userInfo, setUserInfo] = useState("");

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

	const prevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== Math.ceil(usersList.items.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	if (userInfo !== "" && search === "") {
		setUserInfo("");
	}

	const showUserInfo = (username) => {
		setUserInfo(username);
	};

	return (
		<>
			<Header />
			<div className="py-10 px-10 flex flex-col items-center">
				<UsersSearch search={search} setSearch={setSearch} />
				{isLoading && isFetching && (
					<Audio
						height="80"
						width="80"
						radius="9"
						color="#00c2e0"
						ariaLabel="loading"
					/>
				)}
				{error && <p>Error - {error.message}</p>}
				{search && currentPosts && (
					<div className="mt-10">
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
												className="min-w-[144px] max-w-[144px]"
											/>
											<p> Username: {user.login}</p>
										</div>
										<div
											className="py-2 border-2 border-sky-500 bg-white text-center text-sky-500 cursor-pointer
									hover:bg-sky-500 hover:text-white "
											onClick={() => showUserInfo(user.login)}
										>
											Show profile
										</div>
									</div>
								))}
							</div>
							{userInfo && (
								<UserProfile userInfo={userInfo} setUserInfo={setUserInfo} />
							)}
						</div>
						<Pagination
							pagesList={pagesList}
							setCurrentPage={setCurrentPage}
							prevPage={prevPage}
							nextPage={nextPage}
						/>
					</div>
				)}
			</div>
		</>
	);
};
