import React, { useState } from "react";
import {} from "react-native";
import ErrorMessage from "./errorMessage";
import AppPicker from "../appPicker";
import { useFormikContext } from "formik";
import CategoryPicker from "../CategoryPicker";
export default function AppFormPicker({
	name,
	items,
	numOfColumns = 1,
	Picker = AppPicker,
	...otherProps
}) {
	const {
		setFieldTouched,
		setFieldValue,
		touched,
		values,
		errors,
	} = useFormikContext();
	const [selectedItem, setSelectedItem] = useState();

	return (
		<>
			<Picker
				onSelectItem={(item) => {
					setFieldTouched(name);
					setSelectedItem(item);
					setFieldValue(name, item);
				}}
				numOfColumns={numOfColumns}
				selectedItem={values[name]}
				items={items}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
