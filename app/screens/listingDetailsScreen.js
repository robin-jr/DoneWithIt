import React from "react";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	Keyboard,
	Alert,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "../components/appText";
import ListItem from "../components/list/listItem";
import { AppForm, AppFormInput, AppSubmitButton } from "../components/form";
import * as Yup from "yup";
import messages from "../api/messages";
import { Notifications } from "expo";
import ContactSellerForm from "../components/ContactSellerForm";

export default function ListingDetailsScreen({
	name = "Mosh",
	profile = require("../assets/mosh.jpg"),
	route,
}) {
	const listing = route.params;

	return (
		<KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={0}>
			<View style={styles.container}>
				<View style={styles.imageBox}>
					<Image
						preview={{ uri: listing.images[0].thumbnail }}
						tint={"light"}
						uri={listing.images[0].url}
						style={styles.image}
					/>
				</View>
				<View style={styles.textBox}>
					<AppText style={[styles.title, { fontSize: 20 }]}>
						{listing.title}
					</AppText>
					<AppText style={[styles.subtitle, { fontSize: 20 }]}>
						${listing.price}
					</AppText>
				</View>
				<ListItem
					title={name}
					subtitle={"5 Listings"}
					image={profile}
					style={{ marginLeft: "5%" }}
				/>
				<View>
					<ContactSellerForm listing={listing} />
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
const styles = StyleSheet.create({
	imageBox: {
		width: "100%",
		height: "40%",
	},

	container: {
		backgroundColor: colors.white,
		width: "100%",
		height: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
		alignSelf: "center",
	},
	profile: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},

	textBox: {
		paddingVertical: 5,
		width: "100%",
		height: "12%",
	},

	title: {
		color: colors.black,
		fontSize: 18,
		marginTop: 10,
		marginLeft: "5%",
		fontWeight: "700",
	},
	subtitle: {
		color: colors.secondary,
		fontSize: 18,
		marginTop: "2%",
		marginBottom: "2%",
		marginLeft: "5%",
		fontWeight: "500",
	},
});
