import React from "react";
import {} from "react-native";
import AppTextInput from "../appTextInput";
import ErrorMessage from "./errorMessage";
import { useFormikContext } from "formik";

export default function AppFormInput({ name, ...otherProps }) {
	const {
		setFieldTouched,
		setFieldValue,
		touched,
		errors,
		values,
	} = useFormikContext();
	return (
		<>
			<AppTextInput
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				onBlur={() => setFieldTouched(name)}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
