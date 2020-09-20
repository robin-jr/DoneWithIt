import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/appText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

export default function UploadScreen({ onDone, progress, visible = false }) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay
						loop={false}
						style={{ width: 150 }}
						source={require("../assets/animations/done.json")}
						onAnimationFinish={onDone}
					/>
				)}
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
