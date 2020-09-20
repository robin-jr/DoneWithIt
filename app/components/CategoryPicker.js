import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./appText";
import PickerItem from "./pickerItem";

export default function CategoryPicker({
	placeholder = "Select",
	icon,
	items,
	style,
	numOfColumns,
	selectedItem,
	onSelectItem,
}) {
	const [isVisible, setVisible] = useState(false);
	// const [selectedItem, setSelectedItem] = useState("");

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisible(true)}>
				<View style={[styles.container, style]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={30}
							color={colors.grey}
							style={{ marginRight: 15 }}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? (
							selectedItem.label
						) : (
							<AppText style={{ color: "#bbb" }}>
								{placeholder}
							</AppText>
						)}
					</AppText>
					<MaterialCommunityIcons
						name={"chevron-down"}
						size={30}
						color={colors.grey}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={isVisible} animationType={"slide"}>
				<Button
					title={"Close"}
					style={{
						color: colors.secondary,
						marginVertical: 20,
					}}
					onPress={() => {
						setVisible(false);
					}}
				/>

				<FlatList
					numColumns={numOfColumns}
					data={items}
					keyExtractor={(i) => i.value.toString()}
					renderItem={({ item }) => (
						<View
							style={{
								width: "33.333%",
							}}
						>
							<PickerItem
								label={item.label}
								icon={item.icon ? item.icon : null}
								onPress={() => {
									// setSelectedItem(item);
									onSelectItem(item);
									setVisible(false);
								}}
							/>
						</View>
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		width: "100%",
		flexDirection: "row",
		borderRadius: 20,
		padding: 10,
		alignItems: "center",
		marginVertical: 10,
	},
	text: {
		flex: 1,
		fontSize: 18,
	},
});
