import { Cross } from "../assets/icons/cross";
import { UseUserInfo } from "../hooks/useUser";
import { UseUserRepos } from "../hooks/useUserRepos";
import { Audio } from "react-loader-spinner";

export const UserProfile = ({ userInfo, setUserInfo }) => {
	const { user } = UseUserInfo(userInfo);
	const { reposLoading, repos } = UseUserRepos(userInfo);

	const handleCloseInfo = () => {
		setUserInfo("");
	};

	return (
		<div className="max-h-[700px] w-[250px] p-4 my-[12px] border-2 border-cyan-400">
			{reposLoading && (
				<Audio
					height="80"
					width="80"
					radius="9"
					color="#00c2e0"
					ariaLabel="loading"
				/>
			)}
			{user && repos && (
				<div className="relative flex flex-col gap-4">
					<div
						className="absolute top-0 right-0 cursor-pointer"
						onClick={handleCloseInfo}
					>
						<Cross />
					</div>
					<img
						className="w-full mt-8"
						src={user?.avatar_url}
						alt={user?.avatar_url}
					/>
					<p>Username: {user?.login}</p>
					<p>Followers: {user?.followers}</p>
					<div className="flex flex-col gap-4">
						{repos.data.slice(0, 5).map((currentRepo) => (
							<a
								href={currentRepo.html_url}
								target="_blank"
								rel="noreferrer"
								key={currentRepo.html_url}
							>
								{currentRepo.name}
								<p>
									Language:{" "}
									{currentRepo.language ? currentRepo.language : "None"}
								</p>
							</a>
						))}
					</div>
					{console.log("repos", repos)}
				</div>
			)}
		</div>
	);
};
