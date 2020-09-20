import { Platform } from "react-native";
import colors from "./colors";

export default {
	color: colors,
	text: {
		fontSize: 20,
		color: colors.dark,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};