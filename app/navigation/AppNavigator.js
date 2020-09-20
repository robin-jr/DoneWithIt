import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../screens/listingEditScreen";
import colors from "../config/colors";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import useNotifications from "../components/hooks/useNotifications";
import rootNavigation from "./rootNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	useNotifications();

	return (
		<Tab.Navigator tabBarOptions={{ activeTintColor: colors.primary }}>
			<Tab.Screen
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name={"home"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT_SCREEN}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton
							onPress={() =>
								navigation.navigate(routes.LISTING_EDIT_SCREEN)
							}
						/>
					),
				})}
			/>
			<Tab.Screen
				name={routes.ACCOUNT}
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name={"account"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
