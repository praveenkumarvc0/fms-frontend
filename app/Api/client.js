import cache from '../utility/cache';
import { create } from 'apisauce'
import authStorage from '../auth/storage'

const apiClient = create({ baseURL: "http://192.168.43.60:9000/api" });

const get = apiClient.get;

//calling protected APIs

apiClient.addAsyncRequestTransform(async(request) => {
    const authtoken = await authStorage.getToken();
    if (!authtoken)
        return;
    request.headers["x-auth-token"] = authtoken;
})

apiClient.get = async(url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig)
    if (response.ok) {
        cache.store(url, response.data)
        return response;
    }

    const data = await cache.get(url)
    return data ? { ok: true, data } : response;
}


export default apiClient;