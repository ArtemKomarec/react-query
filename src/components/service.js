import axios from "axios";
import { API } from "../constants";

export const signUp = async (newUser) => {
	console.log(newUser);
	await axios.post(`${API}/register`, newUser);
};

export const login = async (user) => {
	console.log(user);
	const response = await axios.post(`${API}/login`, user);
	setToken(response.data.accessToken);
};

export const setToken = (token) => {
	localStorage.setItem("token", token);
};

export const deleteToken = () => {
	localStorage.removeItem("token");
};
