import { Link } from "react-router-dom";
import { deleteToken } from "./service";

export const Header = () => {
	const token = localStorage.getItem("token");

	return (
		<div className="py-4 px-7 flex flex-row justify-between bg-gray-700 text-white">
			<p>Github Users search</p>
			<ul className="flex flex-row gap-8">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>{token !== null && <Link to="/users-search">UsersList</Link>}</li>
				<li>
					{token !== null ? (
						<Link onClick={deleteToken} to="/login">
							Logout
						</Link>
					) : (
						<Link to="/login">Login</Link>
					)}
				</li>
			</ul>
		</div>
	);
};
