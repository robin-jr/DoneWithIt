import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

export default function ActivityIndicator({ visible = false }) {
	if (!visible) return null;
	return (
		<LottieView
			autoPlay
			loop
			source={require("../assets/animations/loader.json")}
		/>
	);
}
// const styles = StyleSheet.create({
// 	overlay: {
// 		// position: "absolute",
// 		backgroundColor: "#000",
// 		height: "100%",
// 		opacity: 0.8,
// 		width: "100%",
// 		// zIndex: 1,
// 	},
// });
