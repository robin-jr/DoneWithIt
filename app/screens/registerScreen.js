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
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
	const [regFailed, setRegFailed] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { login } = useAuth();
	const handleRegister = async (userInfo) => {
		setLoading(true);
		const response = await auth.register(userInfo);
		if (!response.ok) {
			setRegFailed(true);
			if (response.data !== null) setError(response.data.error);
			else setError("Something unexpected happened");
			setLoading(false);
			return;
		}
		setRegFailed(false);
		const { email, password } = userInfo;
		const { data: authToken } = await auth.login(email, password);
		await login(authToken);
		setLoading(false);
	};
	return (
		<Screen style={styles.container}>
			<Image
				source={require("../assets/logo-red.png")}
				style={styles.logo}
			/>
			<AppForm
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={handleRegister}
				validationSchema={validationSchema}
			>
				<AppFormInput
					name={"name"}
					placeholder={"Name"}
					icon={"account"}
					autoCorrect={false}
					textContentType={"name"}
					style={{ marginBottom: 0 }}
				/>
				<AppFormInput
					name={"email"}
					placeholder={"Email"}
					icon={"email"}
					autoCapitalize={"none"}
					autoCorrect={false}
					keyboardType={"email-address"}
					style={{ marginBottom: 0 }}
				/>

				<AppFormInput
					name={"password"}
					placeholder={"Password"}
					icon={"lock"}
					secureTextEntry
					autoCorrect={false}
					textContentType={"password"}
				/>
				<ErrorMessage error={error} visible={regFailed} />

				<AppSubmitButton
					title={"REGISTER"}
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
	container: { padding: 20, alignItems: "center" },
	logo: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 30,
	},
});
