import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { signUp } from "../utils/service";
import { Field, Form, Formik } from "formik";
import { userSchema } from "../utils/constants";

export const SignUp = () => {
	const mutation = useMutation(signUp, {
		onSuccess: () => {
			console.log("success sign up");
		},
		onError: () => {
			console.log("error sign up");
		},
	});

	const addNewUser = (newUser) => {
		mutation.mutate(newUser);
	};

	return (
		<>
			<Header />
			<div className="w-[300px] py-10 mt-40 mx-auto flex flex-col justify-center items-center	border-2 border-sky-500">
				<h1 className="text-center">Registration</h1>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={userSchema}
					onSubmit={(values, { resetForm }) => {
						addNewUser(values);
						resetForm();
					}}
				>
					{({ values, errors, touched }) => (
						<>
							<Form className="mt-5 px-7 flex flex-col content-center gap-6 leading-4">
								<div>
									<Field
										className="w-full border-b-[1px] border-gray-400 focus:outline-none"
										placeholder="Email"
										name="email"
										value={values.email}
									/>
									{errors.email && touched.email && (
										<span className="text-red-500 text-xs">{errors.email}</span>
									)}
								</div>
								<div>
									<Field
										className="w-full border-b-[1px] border-gray-400 focus:outline-none"
										placeholder="Password"
										name="password"
										value={values.password}
									/>
									{errors.password && touched.password && (
										<span className="text-red-500 text-xs">
											{errors.password}
										</span>
									)}
								</div>
								<button
									className="py-2 border-2 rounded-sm border-sky-500 bg-sky-500 text-white"
									type="submit"
								>
									Sign up
								</button>
							</Form>
						</>
					)}
				</Formik>
				<p className="mt-1 text-xs">
					Already have an account?{" "}
					<Link className="text-sky-600" to="/login">
						Login
					</Link>
				</p>
			</div>
		</>
	);
};
