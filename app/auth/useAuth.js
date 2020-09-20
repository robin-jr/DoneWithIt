import storage from "./storage";
import AuthContext from "./AuthContext";
import { useContext } from "react";
import JwtDecode from "jwt-decode";

export default useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logout = () => {
		setUser(null);
		storage.removeToken();
	};

	const login = async (authToken) => {
		const user = JwtDecode(authToken);
		setUser(user);
		await storage.storeToken(authToken);
	};

	return { user, login, logout };
};
