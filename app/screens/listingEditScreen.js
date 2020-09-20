import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../screens/screen";
import * as Yup from "yup";
import {
	AppForm,
	AppSubmitButton,
	AppFormInput,
	AppFormPicker,
} from "../components/form";
import CategoryPicker from "../components/CategoryPicker";
import FormImagePicker from "../components/form/formImagePicker";
import useLocation from "../components/hooks/useLocation";
import listings from "../api/listings";
import useApi from "../components/hooks/useApi";
import { useFormikContext } from "formik";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
	images: Yup.array().min(1, "Please select atleast one image"),
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().label("Price"),
	category: Yup.string().required().nullable().label("Category"),
	description: Yup.string().optional().max(255).label("Description"),
});

const items = [
	{
		value: 1,
		label: "Furniture",
		icon: { name: "floor-lamp", backgroundColor: "#fc5c65" },
	},
	{
		value: 2,
		label: "Cars",
		icon: { name: "car", backgroundColor: "#fd9644" },
	},
	{
		value: 3,
		label: "Cameras",
		icon: { name: "camera", backgroundColor: "#fed330" },
	},
	{
		value: 4,
		label: "Games",
		icon: { name: "cards", backgroundColor: "#26de81" },
	},
	{
		value: 5,
		label: "Clothing",
		icon: { name: "shoe-heel", backgroundColor: "#2bcbba" },
	},
	{
		value: 6,
		label: "Sports",
		icon: { name: "basketball", backgroundColor: "#45aaf2" },
	},
	{
		value: 7,
		label: "Movies & Music",
		icon: { name: "headphones", backgroundColor: "#4b7bec" },
	},
	{
		value: 8,
		label: "Books",
		icon: { name: "book-open-variant", backgroundColor: "violet" },
	},
	{
		value: 9,
		label: "Other",
		icon: { name: "tab", backgroundColor: "lightgreen" },
	},
];

export default function ListingEditScreen() {
	const location = useLocation();
	const [progress, setProgress] = useState(0);
	const [anivisible, setAnivisible] = useState(false);
	const postListing = useApi(listings.postListing);
	const handleSubmit = async (listing, { resetForm }) => {
		setAnivisible(true);
		setProgress(0);
		await postListing.request({ ...listing, location }, (progress) =>
			setProgress(progress)
		);
		if (postListing.error) {
			setAnivisible(false);
			return alert("Error happened");
		}
		resetForm();
		listings.getListings();
	};

	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setAnivisible(false)}
				progress={progress}
				visible={anivisible}
			/>
			<AppForm
				initialValues={{
					images: [],
					title: "",
					price: "",
					category: null,
					description: "",
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FormImagePicker name={"images"} />
				<AppFormInput
					name={"title"}
					placeholder={"Title"}
					autoCorrect={false}
				/>
				<AppFormInput
					name={"price"}
					placeholder={"Price"}
					width="30%"
					style={{ alignSelf: "flex-start" }}
					keyboardType={"numeric"}
				/>
				<AppFormPicker
					name="category"
					numOfColumns={3}
					Picker={CategoryPicker}
					style={{ alignSelf: "flex-start", width: "50%" }}
					placeholder={"Category"}
					items={items}
				/>
				<AppFormInput
					name={"description"}
					multiline
					placeholder={"Description"}
				/>

				<AppSubmitButton
					title={"POST"}
					style={{
						marginTop: 30,
						height: 55,
					}}
				/>
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: { padding: 20, alignItems: "flex-start", paddingTop: 50 },
});
