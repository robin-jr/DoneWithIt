import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./screen";
import colors from "../config/colors";
import ListItem from "../components/list/listItem";
import Listing from "../components/listing";
import { FlatList } from "react-native-gesture-handler";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
	{
		color: colors.primary,
		image: "format-list-bulleted",
		targetScreen: routes.LISTINGS_SCREEN,
		title: "Listings",
	},
	{
		color: colors.secondary,
		targetScreen: routes.MESSAGES_SCREEN,
		image: "email",
		title: "My Messages",
	},
];

export default function MyAccountScreen({ navigation }) {
	const { user, logout } = useAuth();

	return (
		<Screen style={styles.container}>
			<ListItem
				style={{ backgroundColor: colors.white }}
				title={user.name}
				subtitle={user.email}
				image={require("../assets/mosh.jpg")}
			/>

			<View
				style={{
					marginBottom: 30,
					marginTop: 40,
				}}
			>
				<FlatList
					data={menuItems}
					keyExtractor={(data) => data.title}
					renderItem={({ item }) => (
						<Listing
							image={item.image}
							style={{ marginTop: 1 }}
							onPress={() =>
								navigation.navigate(item.targetScreen)
							}
							color={item.color}
							title={item.title}
						/>
					)}
				/>
			</View>

			<Listing
				color={colors.yellow}
				image={"logout"}
				title={"Logout"}
				onPress={() => logout()}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		paddingTop: 50,
	},
});
