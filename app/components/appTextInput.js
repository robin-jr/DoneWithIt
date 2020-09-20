import React from "react";
import { Text, StyleSheet, Platform, View, TextInput } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./icon";
import appStyles from "../config/appStyles";

export default function AppTextInput({
	placeholder = "Type here",
	icon,
	style,
	width = "100%",
	...otherProps
}) {
	return (
		<View style={[styles.container, style, { width: width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={30}
					color={colors.grey}
					style={{ marginRight: 15 }}
				/>
			)}
			<TextInput
				placeholder={placeholder}
				style={[appStyles.text, style]}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		width: "100%",
		flexDirection: "row",
		borderRadius: 20,
		padding: 10,
		alignItems: "center",
		marginVertical: 10,
	},
});
