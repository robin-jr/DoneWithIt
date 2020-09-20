import { Notifications } from "expo";
import expoPushNotifications from "../../api/expoPushNotifications";
import rootNavigation from "../../navigation/rootNavigation";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";

export default useNotifications = (notificationListener) => {
	useEffect(() => {
		registerForPushNotifications();
		if (notificationListener)
			Notifications.addListener(notificationListener);
	}, []);
	const registerForPushNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(
				Permissions.NOTIFICATIONS
			);
			if (!permission.granted) return;
			const token = await Notifications.getExpoPushTokenAsync();
			expoPushNotifications.register(token);
		} catch (error) {
			console.log("Cannot get notification token", error);
		}
	};
};
