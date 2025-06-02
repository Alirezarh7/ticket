import axios from 'axios';
import { currentBaseUrl } from "./baseURL.ts";
// import { enqueueSnackbar } from 'notistack';



const singleUiAxios = axios.create({
    baseURL: currentBaseUrl,
});

// قبل از هر ریکوئست، توکن رو از localStorage بردار و روی هدر ست کن
singleUiAxios.interceptors.request.use((config) => {
    // const Token = localStorage.getItem(shareData.ORGANIZATION_STORAGE_KEY2);
    // const tokenObj = Token ? JSON.parse(Token) : null;
    config.headers['Authorization'] = 'Bearer '
    return config;
//     if (tokenObj?.access_token) {
//         config.headers['Authorization'] = 'Bearer ' + tokenObj.access_token;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
});

// هندل ارور
// singleUiAxios.interceptors.response.use(
//     response => response,
//     axiosError => {
//         if (axiosError.response?.status === 401){
//             automaticlyLogout()
//         } else if (axiosError.response?.status === 502) {
//             return enqueueSnackbar('سامانه در حال بروز رسانی نسخه جدید می باشد، لطفا تا ۱۵ دقیقه دیگر مراجعه نفرمایید', { variant: 'info' });
//         } else {
//             return Promise.reject(axiosError);
//         }
//     }
// );

export default singleUiAxios;
