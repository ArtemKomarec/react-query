import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { login } from "./service";

export const Login = () => {
	const [user, getUser] = useState({
		email: "",
		password: "",
	});

	const changeHandler = (e) => {
		getUser({ ...user, [e.target.name]: e.target.value });
	};

	const mutation = useMutation(login, {
		onSuccess: () => {
			console.log("Success login");
		},
		onError: () => {
			console.log("Error login");
		},
	});

	const authUser = () => {
		mutation.mutate(user);
	};

	return (
		<>
			<Header />
			<div className="w-52 py-7 px-7 mt-40 mx-auto flex flex-col justify-center content-center gap-4 border-2 border-sky-500 text-center">
				<h1>Login</h1>
				<input
					className="border-b-[1px] border-gray-400 focus:outline-none"
					placeholder="Email"
					name="email"
					onChange={changeHandler}
					value={user.email}
				/>
				<input
					className="border-b-[1px] border-gray-400 focus:outline-none"
					placeholder="Password"
					name="password"
					onChange={changeHandler}
					value={user.password}
				/>
				<button
					className="py-0.5 border-2 rounded-sm border-sky-500 bg-sky-500 text-white"
					onClick={authUser}
				>
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
