import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log("Error storing authToken");
	}
};

const getToken = async () => {
	try {
		const token = await SecureStore.getItemAsync(key);
		if (!token) return null;
		return token;
	} catch (error) {
		console.log("Error getting authToken");
	}
};

const getUser = async () => {
	const token = await getToken();
	return token ? JwtDecode(token) : null;
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log("Error removing authToken");
	}
};

export default { getUser, removeToken, getToken, storeToken };
