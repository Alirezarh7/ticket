import axios from 'axios';
import { currentBaseUrl } from "./baseURL.ts";

const singleUiAxios = axios.create({
    baseURL: currentBaseUrl,
});

singleUiAxios.interceptors.request.use((config) => {
    config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJtaW5pQXBwTmFtZSI6ImFwcDphZDpoYWotZmxpZ2h0LWRhdGUiLCJ1c2VybmFtZSI6IjAwMjA1MzczNTIiLCJzdWIiOiJtaW5pQXBwIiwiaWF0IjoxNzQ5MDIxNjcyLCJleHAiOjE3NDkwMjUyNzJ9.Y0Q_-t62ustLiaxFhZsm1RnVyIcJi-9bdeN6Wyfj320VDAb5t9cHpUXZXKvZIWN9XcaXH6NyrFcfc0sKjm-fTQ';
    return config;
}, (error) => {
    return Promise.reject(error);
});

singleUiAxios.interceptors.response.use(
  response => response,
);

export default singleUiAxios;
