import * as Yup from "yup";

export const USERS_API = "https://api.github.com/search/users?q=";
export const USER_INFO = "https://api.github.com/users";
export const API = "http://localhost:3000";

export const userSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.required("Required")
		.min(4, "Password should be more then 4 symbols"),
});
