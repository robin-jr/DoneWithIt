import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../screens/screen";
import * as Yup from "yup";
import {
	AppForm,
	AppSubmitButton,
	AppFormInput,
	ErrorMessage,
} from "../components/form";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const [loginFailed, setloginFailed] = useState(false);
	const handleSubmit = async ({ email, password }) => {
		setLoading(true);
		const response = await authApi.login(email, password);

		if (!response.ok) {
			setLoading(false);
			setloginFailed(true);
			return;
		}
		setloginFailed(false);
		await login(response.data);
		setLoading(false);
	};
	return (
		<Screen style={styles.container}>
			<Image
				source={require("../assets/logo-red.png")}
				style={styles.logo}
			/>
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<AppFormInput
					name={"email"}
					placeholder={"Email"}
					icon={"email"}
					autoCorrect={false}
					autoCapitalize={"none"}
					textContentType={"emailAddress"}
					keyboardType={"email-address"}
					style={{ marginBottom: 0 }}
				/>

				<AppFormInput
					name={"password"}
					placeholder={"Password"}
					autoCapitalize={"none"}
					icon={"lock"}
					secureTextEntry
					autoCorrect={false}
					textContentType={"password"}
				/>
				<ErrorMessage
					visible={loginFailed}
					error={"Invalid email or password"}
				/>

				<AppSubmitButton
					title={"LOGIN"}
					style={{
						marginTop: 20,
						height: 55,
					}}
				/>
			</AppForm>
			<ActivityIndicator visible={loading} />
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: { padding: 20, alignItems: "flex-start" },
	logo: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 30,
	},
});
