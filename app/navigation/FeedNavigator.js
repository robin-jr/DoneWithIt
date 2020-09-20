import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/listingsScreen";
import ListingDetailsScreen from "../screens/listingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => {
	return (
		<Stack.Navigator
			mode="modal"
			initialRouteName={routes.LISTINGS_SCREEN}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name={routes.LISTINGS_SCREEN}
				component={ListingsScreen}
			/>
			<Stack.Screen
				name={routes.LISTING_DETAILS}
				component={ListingDetailsScreen}
			/>
		</Stack.Navigator>
	);
};
export default FeedNavigator;
