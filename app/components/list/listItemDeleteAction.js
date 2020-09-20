import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress} style={styles.container}>
			<MaterialCommunityIcons
				name={"trash-can"}
				color={colors.white}
				size={35}
			/>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	container: {
		width: 70,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.danger,
	},
});
