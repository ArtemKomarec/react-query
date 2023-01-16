import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { USER_INFO } from "../constants";

export const UseUserRepos = (username) => {
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery({
    queryKey: ["userRepos", username],
    queryFn: async () => {
      const result = await axios.get(`${USER_INFO}/${username}/repos`);
      console.log(result);
      return result;
    },
    enabled: !!username,
  });

  return { isLoading, error, repos };
};
