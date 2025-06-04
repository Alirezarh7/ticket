import axios from 'axios';
import { currentBaseUrl } from "./baseURL.ts";

const singleUiAxios = axios.create({
    baseURL: currentBaseUrl,
});

singleUiAxios.interceptors.request.use((config) => {
    config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJtaW5pQXBwTmFtZSI6ImFwcDphZDpoYWotZmxpZ2h0LWRhdGUiLCJ1c2VybmFtZSI6IjIyMTg2NzE2MzgiLCJzdWIiOiJtaW5pQXBwIiwiaWF0IjoxNzQ5MDIzNDM2LCJleHAiOjE3NDkwMjcwMzZ9.2cQCRzFXPaS8Z4zNqF8hLMA9vd2R0SeYGhycv3rhRWs6jh_DG99EVPhEB-aPUxzI1-3OP0QuVCbiseeF58v-lA';
    return config;
}, (error) => {
    return Promise.reject(error);
});

singleUiAxios.interceptors.response.use(
  response => response,
);

export default singleUiAxios;
