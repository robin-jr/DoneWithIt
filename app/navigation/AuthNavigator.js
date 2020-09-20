import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import WelcomeScreen from "../screens/welcomeScreen";
import AppNavigator from "./AppNavigator";
import routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={routes.WELCOME_SCREEN}
				component={WelcomeScreen}
			/>
			<Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
			<Stack.Screen
				name={routes.REGISTER_SCREEN}
				component={RegisterScreen}
			/>
			{/* <Stack.Screen
				name={routes.APP_NAVIGATOR}
				component={AppNavigator}
			/> */}
		</Stack.Navigator>
	);
};
export default AuthNavigator;
