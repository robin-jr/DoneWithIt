import { create } from "apisauce";
import storage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
	baseURL: "http://192.168.43.107:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
	const authToken = await storage.getToken();
	if (!authToken) return;
	request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (uri, params, axiosConfig) => {
	const response = await get(uri, params, axiosConfig);
	if (response.ok) {
		cache.store(uri, response.data);
		return response;
	}
	const data = await cache.get(uri);

	return data ? { data: data, ok: true } : response;
};

export default apiClient;
