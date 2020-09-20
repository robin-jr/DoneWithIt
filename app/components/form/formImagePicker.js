import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInputList from "../imageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./errorMessage";

export default function FormImagePicker({ name }) {
	const { touched, errors, setFieldValue, values } = useFormikContext();

	const handleAdd = (uri) => {
		setFieldValue(name, [...values[name], uri]);
	};
	const handleRemove = (uri) => {
		setFieldValue(
			name,
			values[name].filter((i) => i !== uri)
		);
	};

	return (
		<View style={styles.container}>
			<ImageInputList
				imageUris={values[name]}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		height: 90,
		width: "100%",
		marginVertical: 10,
		alignSelf: "flex-start",
		justifyContent: "center",
		alignItems: "flex-start",
	},
});
