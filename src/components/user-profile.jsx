import { UseUserInfo } from "../hooks/useUser";

export const UserProfile = ({ userInfo }) => {
	const { user } = UseUserInfo(userInfo);

	return (
		<div className="max-h-[700px] p-4 my-[12px] flex flex-col gap-5 border-2 border-cyan-400">
			{console.log(user)}
			<img src={user?.avatar_url} />
			Username: {user?.login}
		</div>
	);
};
