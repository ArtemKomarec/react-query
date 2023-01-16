import { Cross } from "../assets/icons/cross";
import { UseUserInfo } from "../hooks/useUser";
import { UseUserRepos } from "../hooks/useUserRepos";

export const UserProfile = ({ userInfo, setUserInfo }) => {
  const { isLoading, user } = UseUserInfo(userInfo);
  const { repos } = UseUserRepos(userInfo);

  const handleCloseInfo = () => {
    setUserInfo("");
  };

  return (
    <div className="max-h-[700px] p-4 my-[12px] border-2 border-cyan-400">
      {isLoading && <p>Loading...</p>}
      <div className="relative flex flex-col gap-5">
        <div
          className="absolute top-0 right-0 cursor-pointer"
          onClick={handleCloseInfo}
        >
          <Cross />
        </div>
        <img
          className="w-[300px] mt-8"
          src={user?.avatar_url}
          alt={user?.avatar_url}
        />
        <p>Username: {user?.login}</p>
        <p>Followers: {user?.followers}</p>
        {console.log(repos)}
      </div>
    </div>
  );
};
