import axios from 'axios';
import { currentBaseUrl } from "./baseURL.ts";

const singleUiAxios = axios.create({
    baseURL: currentBaseUrl,
});

singleUiAxios.interceptors.request.use((config) => {
    config.headers['Authorization'] = 'eyJhbGciOiJIUzUxMiJ9.eyJtaW5pQXBwTmFtZSI6ImFwcDphZDpoYWotZmxpZ2h0LWRhdGUiLCJ1c2VybmFtZSI6IjAwMTAzOTE0MjgiLCJzdWIiOiJtaW5pQXBwIiwiaWF0IjoxNzQ4OTYzNDk3LCJleHAiOjE3NDk4Mjc0OTd9.uK42wR0pyrog-sC8TUrv2YKJ27NAX-H_VUcIvv0vg5tLFj62KqoTzfT-D_crc8kFwtCkAXPOK8BNL6Z1gqwNvA';
    return config;
}, (error) => {
    return Promise.reject(error);
});

singleUiAxios.interceptors.response.use(
  response => response,
);

export default singleUiAxios;
