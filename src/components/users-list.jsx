import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { USERS_API } from "../constants";
import { UserProfile } from "./user-profile";
import { UsersSearch } from "./users-search";

export const UsersList = () => {
	const [search, setSearch] = useState("")
	const queryInfo = useQuery({
    queryKey: ["searchUsers", search],
    queryFn: async () => {
      const result = await axios
        .get(`${USERS_API}/${search}`, { queryParams: { query: search } })
		console.log(result)
		return result
    },
    enabled: Boolean(search),
  });
	return (
    <div>
      <UsersSearch search={search} setSearch={setSearch} />
      <div
        style={{
          marginTop: 40,
          display: "flex",
          justifyContent: "center",
          gap: 40,
        }}
      ></div>
    </div>
  );
};
