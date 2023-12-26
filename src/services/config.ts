import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const BASE_URL= "http://172.20.10.3:3000"
const TIME_OUT = 30000;
const TODO_TOKEN_NAME = "todo_user_token"

const axiosInstance = axios.create({
    baseURL:  BASE_URL,
    timeout: TIME_OUT
})

export const saveToken = async (key: string, value: string) => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
       console.log('error in saveToken', error);
       throw (error) 
    }
}

axiosInstance.interceptors.request.use(async (req) => {
    try {
        const access_token = await SecureStore.getItemAsync(TODO_TOKEN_NAME)
        req.headers.Authorization = access_token;
        return req;
    } catch (error) {
        return req;
    }
})

export const fetcher = (url : string) => axiosInstance.get(url).then((res) => res?.data)

export default axiosInstance;