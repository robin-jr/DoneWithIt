import React from "react";
import {
	Button,
	TouchableOpacity,
	Text,
	StyleSheet,
	Platform,
} from "react-native";
import colors from "../config/colors";

export default function BigButton({ title, style, onPress }) {
	const styles = StyleSheet.create({
		button: {
			width: "100%",
			height: 60,
			justifyContent: "center",
			backgroundColor: style?.color ? style.color : colors.primary,
			alignItems: "center",
			borderRadius: 30,
			padding: 10,
		},
		text: {
			fontSize: 19,
			fontWeight: "bold",
			color: colors.white,
			fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		},
	});

	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.text}> {title}</Text>
		</TouchableOpacity>
	);
}
