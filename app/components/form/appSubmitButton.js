import React from "react";
import { useFormikContext } from "formik";
import BigButton from "../bigButton";

export default function AppSubmitButton({ title, ...otherProps }) {
	const { handleSubmit } = useFormikContext();
	return <BigButton title={title} onPress={handleSubmit} {...otherProps} />;
}
