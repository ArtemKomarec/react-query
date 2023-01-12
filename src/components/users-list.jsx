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
    <div>
      <UsersSearch search={search} setSearch={setSearch} />
      {isLoading && <p>Loading</p>}
      {error && <p>Error - {error.message}</p>}
	  {data && (
		<div className="grid grid-cols-4" >
        {data.data.items.map((user) => (
          <div className="my-[12px]" key={user.id}>
            <p>{user.login}</p>
          </div>
        ))}
      </div>
	  )}
    </div>
  );
};
