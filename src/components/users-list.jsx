import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { USERS_API } from "../constants";
import { UsersSearch } from "./users-search";
import React from "react";
import useDebounce from "./debounce";

export const UsersList = () => {
	const [search, setSearch] = useState("")
	const debouncedSearchValue = useDebounce(search, 500)
	const {
		isLoading,
		error,
		data
	} = useQuery({
    queryKey: ["users", debouncedSearchValue],
    queryFn: async () => {
      const result = await axios
        .get(`${USERS_API + search}`)
		return result;
    },
    enabled: Boolean(search),
  });

 	// if (isLoading) return <p>Loading</p>;

	// if (error) return <p>Error - ${error.message}</p>;

	return (
    <div className="px-20">
      <UsersSearch search={search} setSearch={setSearch} />
      {isLoading && <p>Loading</p>}
      {error && <p>Error - {error.message}</p>}
	  {data && (
		<div className="grid grid-cols-4 justify-center gap-5" >
        {data.data.items.map((user) => (
          <div className="my-[12px] p-8 border-2 border-cyan-400" key={user.id}>
			<div className="flex row justify-between">
			<img src={user.avatar_url} className="w-36"/>
            <p>{user.login}</p>
			</div>
          </div>
        ))}
      </div>
	  )}
    </div>
  );
};
