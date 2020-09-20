import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Icon({
	name,
	style,
	backgroundColor = colors.black,
	color = colors.white,
	size = 60,
}) {
	const styles = StyleSheet.create({
		container: {
			width: size,
			height: size,
			borderRadius: size / 2,
			backgroundColor,
			alignItems: "center",
			justifyContent: "center",
		},
	});
	return (
		<View style={[styles.container, style]}>
			<MaterialCommunityIcons
				name={name}
				color={color}
				size={size / 1.8}
			/>
		</View>
	);
}
