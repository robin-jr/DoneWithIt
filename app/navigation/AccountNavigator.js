import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyAccountScreen from "../screens/myAccountScreen";
import MessagesScreen from "../screens/messagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={routes.MY_ACCOUNT_SCREEN}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name={routes.MY_ACCOUNT_SCREEN}
				component={MyAccountScreen}
			/>
			<Stack.Screen
				name={routes.MESSAGES_SCREEN}
				component={MessagesScreen}
			/>
		</Stack.Navigator>
	);
};

export default AccountNavigator;
