import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./appText";

export default function Card({
	imageUrl,
	title,
	subtitle,
	onPress,
	thumbnailUrl,
}) {
	return (
		<View style={styles.container}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View>
					<View style={styles.imageBox}>
						<Image
							uri={imageUrl}
							tint={"light"}
							preview={{ uri: thumbnailUrl }}
							style={styles.image}
						/>
					</View>
					<View style={styles.textBox}>
						<AppText numberOfLines={1} style={styles.title}>
							{title}
						</AppText>
						<AppText numberOfLines={2} style={styles.subtitle}>
							{subtitle}
						</AppText>
					</View>
				</View>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	imageBox: {
		width: "100%",
		height: "70%",
	},

	container: {
		backgroundColor: colors.white,
		borderRadius: 20,
		width: "90%",
		height: 290,
		alignSelf: "center",
		justifyContent: "flex-end",
		marginBottom: "5%",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		alignSelf: "center",
	},
	textBox: {
		paddingVertical: 5,
		width: "100%",
		height: "30%",
		// justifyContent: "center",
	},

	title: {
		color: colors.black,
		fontSize: 18,
		marginTop: 10,
		marginLeft: "8%",
		fontWeight: "700",
		textTransform: "capitalize",
	},
	subtitle: {
		color: colors.secondary,
		fontSize: 18,
		marginTop: "2%",
		marginBottom: "5%",
		marginLeft: "8%",
		fontWeight: "500",
	},
});
