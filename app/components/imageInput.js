import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Image,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput({ imageUri, onChangeImage, width = 80 }) {
	try {
		const requestPermission = async () => {
			const {
				granted,
			} = await ImagePicker.requestCameraRollPermissionsAsync();
			if (!granted)
				alert("You need give permission to access the Camera");
		};
		useEffect(() => {
			requestPermission();
		}, []);
	} catch (e) {
		console.log(e);
	}
	const handlePress = () => {
		if (!imageUri) selectImage();
		else {
			Alert.alert(
				"Delete",
				"Are you sure you want to delete this image?",
				[
					{ text: "Yes", onPress: () => onChangeImage(null) },
					{ text: "No" },
				]
			);
		}
	};
	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) onChangeImage(result.uri);
		} catch (error) {
			console.log("Unable to select the image", error);
		}
	};
	return (
		<TouchableHighlight
			style={[styles.container, { width: width, height: width }]}
			underlayColor={colors.light}
			onPress={handlePress}
		>
			{imageUri ? (
				<Image
					source={{ uri: imageUri, width: "100%", height: "100%" }}
				/>
			) : (
				<View>
					<MaterialCommunityIcons
						name={"camera"}
						color={colors.medium}
						size={40}
					/>
				</View>
			)}
		</TouchableHighlight>
	);
}
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 5,
		backgroundColor: colors.light,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		overflow: "hidden",
	},
});
