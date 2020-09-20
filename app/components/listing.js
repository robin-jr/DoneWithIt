import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./appText";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from "./icon";

export default function Listing({ style, image, title, color, onPress }) {
	return (
		<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
			<View style={[styles.container, style]}>
				<Icon backgroundColor={color} name={"email"} size={45} />
				<View style={{ paddingRight: 50 }}>
					<AppText style={[styles.text, { marginLeft: 15 }]}>
						{title}
					</AppText>
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontWeight: "900",
	},

	container: {
		backgroundColor: colors.white,
		width: "100%",
		height: 70,
		// justifyContent: "center",
		alignItems: "center",
		padding: 5,
		paddingLeft: 10,
		flexDirection: "row",
	},
});
