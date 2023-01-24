import { Header } from "./header";

export const Login = () => {
	return (
		<>
			<Header />
			<div>
				<h1>Login</h1>
				<input placeholder="Login" />
				<input placeholder="Password" />
			</div>
		</>
	);
};
