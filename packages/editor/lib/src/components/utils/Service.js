import axios from 'axios';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
//axios.defaults.=true
var config = {
    baseURL: '/',
    timeout: 60 * 1000, // Timeout
};
var _axios = axios.create(config);
_axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Cache-Control'] = 'no-cache';
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
_axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject();
});
export default _axios;
//# sourceMappingURL=Service.js.map