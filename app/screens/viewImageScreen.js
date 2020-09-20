import React from "react";
import {
	StyleSheet,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
	const image = require("../assets/chair.jpg");
	return (
		<View style={styles.container}>
			<View style={styles.closeIconBox}>
				<MaterialCommunityIcons
					name={"close"}
					size={30}
					color={"#fff"}
				/>
			</View>
			<View style={styles.deleteIconBox}>
				<MaterialCommunityIcons
					name={"trash-can-outline"}
					size={30}
					color={"#fff"}
				/>
			</View>
			<View style={styles.imageBox}>
				<Image
					resizeMode={"contain"}
					source={image}
					style={styles.image}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		flex: 1,
		padding: 0,
		flexDirection: "row",
		justifyContent: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageBox: {
		backgroundColor: colors.black,
		width: "98%",
		height: "80%",
		marginBottom: "10%",
		alignSelf: "flex-end",
	},
	closeIconBox: {
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: "5%",
		left: "2%",
	},
	deleteIconBox: {
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: "5%",
		right: "2%",
	},
	text: {
		fontSize: 20,
		alignSelf: "center",
	},
});
