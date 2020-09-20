import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Screen from "./screen";
import Card from "../components/card";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/appText";
import BigButton from "../components/bigButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../components/hooks/useApi";
import { Notifications } from "expo";

export default function ListingsScreen({ navigation }) {
	const { data: listings, error, loading, request: loadListings } = useApi(
		listingsApi.getListings
	);

	useEffect(() => {
		loadListings();
	}, []);

	const handlePress = (item) => {
		navigation.navigate(routes.LISTING_DETAILS, item);
	};

	return (
		<Screen>
			{error && (
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						padding: 10,
						flex: 1,
					}}
				>
					<AppText style={{ marginBottom: 10 }}>
						Couldn't retrieve the listings
					</AppText>
					<BigButton
						style={{ color: colors.primary, width: "50%" }}
						title={"Retry"}
						onPress={loadListings}
					/>
				</View>
			)}

			<View style={styles.container}>
				<FlatList
					// onScrollEndDrag={loadListings}
					style={styles.flat}
					data={listings}
					onEndReached={loadListings}
					keyExtractor={(data) => data.id.toString()}
					renderItem={({ item }) => (
						<Card
							imageUrl={item.images[0].url}
							title={item.title}
							thumbnailUrl={item.images[0].thumbnailUrl}
							subtitle={"$" + item.price}
							onPress={() => handlePress(item)}
						/>
					)}
				/>
			</View>
			<ActivityIndicator visible={loading} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: colors.light,
		overflow: "scroll",
	},
	flat: {
		width: "100%",
		height: "100%",
	},
});
