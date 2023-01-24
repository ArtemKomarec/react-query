import { Link } from "react-router-dom";
import { Header } from "./header";

export const Login = () => {
	return (
		<>
			<Header />
			<div className="w-52 py-7 px-7 mt-40 mx-auto flex flex-col justify-center content-center gap-4 border-2 border-sky-500 text-center">
				<h1>Login</h1>
				<input
					className="border-b-[1px] border-gray-400 focus:outline-none"
					placeholder="Email"
				/>
				<input
					className="border-b-[1px] border-gray-400 focus:outline-none"
					placeholder="Password"
				/>
				<button className="py-0.5 border-2 rounded-sm border-sky-500 bg-sky-500 text-white">
					Login
				</button>
				<p>
					Don't have an accont?{" "}
					<Link className="text-sky-600" to="/sign-up">
						Sign up
					</Link>
				</p>
			</div>
		</>
	);
};
