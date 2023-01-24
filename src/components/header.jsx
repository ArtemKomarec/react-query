import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className="py-4 px-7 flex flex-row justify-between bg-gray-700 text-white">
			<p>Github Users search</p>
			<ul className="flex flex-row gap-8">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/users-search">UsersList</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</div>
	);
};
