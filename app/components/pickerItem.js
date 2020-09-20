import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppText from "./appText";
import colors from "../config/colors";
import Icon from "./icon";

export default function PickerItem({ label, onPress, style, icon }) {
	return (
		<TouchableOpacity onPress={onPress}>
			{!icon ? (
				<View style={[styles.container, style]}>
					<AppText style={styles.text}>{label}</AppText>
				</View>
			) : (
				<View
					style={{
						alignItems: "center",
						padding: 10,
						justifyContent: "center",
					}}
				>
					<Icon
						name={icon.name}
						backgroundColor={icon.backgroundColor}
						size={80}
					/>
					<AppText
						style={{
							padding: 5,
							fontSize: 18,
							textAlign: "center",
						}}
					>
						{label}
					</AppText>
				</View>
			)}
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	text: {
		padding: 20,
		// textAlign: "center",
	},
});
