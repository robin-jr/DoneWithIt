import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
	try {
		const [location, setLocation] = useState();
		const getLocation = async () => {
			const { granted } = await Location.requestPermissionsAsync();
			if (!granted) return;
			const {
				coords: { latitude, longitude },
			} = await Location.getLastKnownPositionAsync();
			setLocation({ latitude, longitude });
		};
		useEffect(() => {
			getLocation();
		}, []);
		return location;
	} catch (e) {
		console.log(e);
	}
}
