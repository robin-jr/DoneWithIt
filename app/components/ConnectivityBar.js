import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./appText";

export default function ConnectivityBar(props) {
	const netInfo = useNetInfo();
	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
		return (
			<View style={styles.container}>
				<AppText style={{ color: colors.white, fontSize: 18 }}>
					No Internet Connection
				</AppText>
			</View>
		);
	return null;
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		width: "100%",
		height: 60,
		alignItems: "center",
		justifyContent: "flex-end",
	},
});
