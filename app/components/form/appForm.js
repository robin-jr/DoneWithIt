import React, { Children } from "react";
import {} from "react-native";
import { Formik } from "formik";

export default function AppForm({
	initialValues,
	onSubmit,
	validationSchema,
	children,
	...otherProps
}) {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			{...otherProps}
		>
			{() => <>{children}</>}
		</Formik>
	);
}
