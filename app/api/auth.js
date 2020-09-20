import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });
const register = (userInfo) => {
	try {
		return client.post("./users", userInfo);
	} catch (error) {
		console.log("Unable to register");
	}
};

export default {
	login,
	register,
};
