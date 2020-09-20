import { Notifications } from "expo";
import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import messages from "../api/messages";
import { AppForm, AppFormInput, AppSubmitButton } from "./form";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	message: Yup.string().min(1, "Please enter atleast one character"),
});

export default function ContactSellerForm({ listing }) {
	const handleSend = async ({ message }, { resetForm }) => {
		Keyboard.dismiss();
		const result = await messages.send(message, listing.id);
		if (!result.ok) {
			console.log("Message not sent error ", result);
			return alert("Could not send the message");
		}
		resetForm();
		Notifications.presentLocalNotificationAsync({
			title: "Message Sent",
			body: message,
		});
	};
	return (
		<View style={styles.container}>
			<AppForm
				initialValues={{ message: "" }}
				onSubmit={handleSend}
				validationSchema={validationSchema}
			>
				<AppFormInput
					name={"message"}
					multiline
					width={"90%"}
					placeholder={"Type your message here"}
				/>
				<AppSubmitButton
					title={"Send"}
					style={{ width: "30%", height: 45, marginTop: 5 }}
				/>
			</AppForm>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 10,
	},
});
