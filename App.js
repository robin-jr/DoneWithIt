import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import ConnectivityBar from "./app/components/ConnectivityBar";
import AuthContext from "./app/auth/AuthContext";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";
import { navRef } from "./app/navigation/rootNavigation";

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	if (!isReady)
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
			/>
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<ConnectivityBar />
			<NavigationContainer ref={navRef} theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
