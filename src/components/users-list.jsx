import { UserProfile } from "./user-profile";
import { UsersSearch } from "./users-search";

export const UsersList = () => {
	return (
		<div>
			<UsersSearch />
			<div
				style={{
					marginTop: 40,
					display: "flex",
					justifyContent: "center",
					gap: 40,
				}}
			>
				<UserProfile />
				<UserProfile />
				<UserProfile />
				<UserProfile />
				<UserProfile />
			</div>
		</div>
	);
};
