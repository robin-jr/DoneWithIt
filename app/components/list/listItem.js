import React from "react";
import {
	Text,
	StyleSheet,
	Platform,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../appText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../icon";

export default function ListItem({
	renderRightActions,
	onPress,
	style,
	icon,
	iconBackgroundColor,
	image,
	title,
	iconSize = 60,
	subtitle,
	showChevron = false,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={[styles.container, style]}>
					{image && <Image source={image} style={styles.image} />}
					{icon && (
						<Icon
							name={icon}
							size={iconSize}
							backgroundColor={iconBackgroundColor}
							style={{ alignSelf: "center" }}
						/>
					)}
					<View style={styles.textContainer}>
						{title && (
							<AppText numberOfLines={1} style={styles.title}>
								{title}
							</AppText>
						)}
						{subtitle && (
							<AppText numberOfLines={2} style={styles.subtitle}>
								{subtitle}
							</AppText>
						)}
					</View>
					{showChevron && (
						<View style={{ justifyContent: "center" }}>
							<MaterialCommunityIcons
								name="chevron-right"
								size={20}
								color={colors.medium}
								style={styles.chevron}
							/>
						</View>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
	},
	textContainer: {
		marginLeft: 20,
		flex: 1,
		justifyContent: "center",
	},
	chevron: {
		// alignSelf: "flex-end",
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40,
		alignSelf: "center",
	},
	title: {
		color: colors.black,
		fontSize: 18,
		marginTop: 10,
		fontWeight: "700",
		textTransform: "capitalize",
	},
	subtitle: {
		color: colors.grey,
		fontSize: 17,
		marginTop: "2%",
		marginBottom: "2%",
		fontWeight: "500",
	},
});
