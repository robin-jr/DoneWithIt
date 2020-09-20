import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name={"plus-circle"}
					color={colors.white}
					size={35}
				/>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		borderColor: colors.white,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 5,
		height: 60,
		bottom: 20,
		width: 60,
		borderRadius: 30,
	},
});
