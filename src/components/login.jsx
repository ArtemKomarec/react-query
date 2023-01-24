import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../constants";
import { Header } from "./header";

export const Login = () => {
	const [user, getUser] = useState({
		email: "",
		password: "",
	});

	const changeHandler = (e) => {
		getUser({ ...user, [e.target.name]: e.target.value });
	};

	const authUser = async () => {
		const response = await axios.post(`${API}/login`, user);
		localStorage.setItem("token", response.data.accessToken);
		console.log(response, "resp");
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
