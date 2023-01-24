import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../constants";
import { Header } from "./header";

export const SignUp = () => {
	const [newUser, setNewUser] = useState({
		email: "",
		password: "",
	});

	const changeHandler = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const addNewUser = async () => {
		const response = await axios.post(`${API}/register`, newUser);
		console.log(response, "response");
	};

	return (
		<>
			<Header />
			<div className="w-52 py-7 px-7 mt-40 mx-auto flex flex-col justify-center content-center gap-4 border-2 border-sky-500 text-center">
				<h1>Registration</h1>
				<input
					className="border-b-[1px] border-gray-400 focus:outline-none"
					placeholder="Email"
					name="email"
					onChange={changeHandler}
					value={newUser.email}
				/>
				<input
					className="border-b-[1px] border-gray-400 focus:outline-none"
					placeholder="Password"
					name="password"
					onChange={changeHandler}
					value={newUser.password}
				/>
				<button
					className="py-0.5 border-2 rounded-sm border-sky-500 bg-sky-500 text-white"
					onClick={addNewUser}
				>
					Sign up
				</button>
				<p>
					Already have an account?{" "}
					<Link className="text-sky-600" to="/login">
						Login
					</Link>
				</p>
			</div>
		</>
	);
};
