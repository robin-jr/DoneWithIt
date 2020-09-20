import React from "react";
import { StyleSheet, ImageBackground, Image, View } from "react-native";

import colors from "../config/colors";
import BigButton from "../components/bigButton";
import AppText from "../components/appText";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
	const handleLogin = () => {
		navigation.navigate(routes.LOGIN_SCREEN);
	};
	const handleRegister = () => {
		navigation.navigate(routes.REGISTER_SCREEN);
	};
	const image = require("../assets/background.jpg");
	const logo = require("../assets/logo-red.png");

	return (
		<ImageBackground
			blurRadius={2}
			source={image}
			style={styles.backgroundImage}
		>
			<Image source={logo} style={styles.logo} />
			<AppText style={styles.text}>Sell What you Dont Need</AppText>

			<View style={styles.buttonBlock}>
				<BigButton
					style={{ color: colors.primary }}
					onPress={handleLogin}
					title={"LOGIN"}
				/>
				<BigButton
					style={{ color: colors.secondary, marginTop: 10 }}
					onPress={handleRegister}
					title={"REGISTER"}
				/>
			</View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1,
	},
	text: {
		fontSize: 20,
		alignSelf: "center",
	},
	logo: {
		width: 100,
		height: 100,
		marginTop: "20%",
		marginBottom: "2%",
	},
	backgroundImage: {
		flex: 1,
		alignItems: "center",
		// resizeMode: "cover",
		// justifyContent: "center",
	},
	buttonBlock: {
		width: "100%",
		height: "15%",
		justifyContent: "center",
		padding: 8,
		position: "absolute",
		bottom: "3%",
	},
});
