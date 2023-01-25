import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./header";
import { login } from "../utils/service";
import { Field, Form, Formik } from "formik";
import { userSchema } from "../utils/constants";

export const Login = () => {
	const navigate = useNavigate();

	const mutation = useMutation(login, {
		onSuccess: () => {
			navigate("/users-search");
			console.log("Success login");
		},
		onError: () => {
			console.log("Error login");
		},
	});

	const authUser = (user) => {
		mutation.mutate(user);
	};

	return (
		<>
			<Header />
			<div className="w-[300px] py-10 mt-40 mx-auto flex flex-col justify-center items-center	border-2 border-sky-500">
				<h1 className="text-center">Login</h1>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={userSchema}
					onSubmit={(values, { resetForm }) => {
						authUser(values);
						resetForm();
					}}
				>
					{({ values, errors, touched }) => (
						<>
							<Form className="w-[300px] mt-5 px-7 flex flex-col content-center gap-6 leading-4">
								<div>
									<Field
										className="input-field"
										placeholder="Email"
										name="email"
										value={values.email}
									/>
									{errors.email && touched.email && (
										<span className="error-message">{errors.email}</span>
									)}
								</div>
								<div>
									<Field
										className="input-field"
										placeholder="Password"
										name="password"
										value={values.password}
									/>
									{errors.password && touched.password && (
										<span className="error-message">{errors.password}</span>
									)}
								</div>
								<button
									className="py-2 border-2 rounded-sm border-sky-500 bg-sky-500 text-white"
									type="submit"
								>
									Login
								</button>
							</Form>
						</>
					)}
				</Formik>
				<p className="mt-1 text-xs">
					Don't have an account?{" "}
					<Link className="text-sky-600" to="/sign-up">
						Sign up
					</Link>
				</p>
			</div>
		</>
	);
};
