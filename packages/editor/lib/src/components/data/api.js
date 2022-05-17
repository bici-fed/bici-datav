import axios from 'axios';
import JSEncrypt from 'jsencrypt';
import { privateKey } from "./defines";
export var timeout = 2000000;
export var maxContentLength = 200000000;
export var withCredentials = false;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log("response", error);
    return Promise.reject(error);
});
export function handleRequestError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    }
    else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
}
export function clientParam(apiURL) {
    return axios.create({ baseURL: "".concat(apiURL, "/"), timeout: timeout, maxContentLength: maxContentLength, withCredentials: withCredentials });
}
export function apiClientParam(apiURL) {
    return axios.create({ baseURL: "".concat(apiURL, "/"), timeout: timeout, maxContentLength: maxContentLength, withCredentials: withCredentials });
}
// 查询数据点列表
export function fetchSearchDataPointManageList(params) {
    return apiClientParam(window["__CONKPIT_API_URL"]).post('/datapoint/list', params, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            token: window["__CONKPIT_TOKEN"],
            'Content-Type': 'application/json',
        }
    });
}
// 查询反应堆列表
export function fetchSearchReactStackList(params) {
    return clientParam(window["__CONKPIT_API_URL"]).post('/applications/service/remote/reactor/list', params, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            token: window['token'],
            'Content-Type': 'application/json',
        }
    });
}
// 查询外部接口列表
export function fetchDataSourceList(params) {
    return clientParam(window["__CONKPIT_API_URL"]).post('/applications/service/remote/externalInterface/list', params, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            token: window['token'],
            'Content-Type': 'application/json',
        }
    });
}
// 获取复杂感知点列表
export function fetchPerceptualPointList(params) {
    return clientParam(window["__CONKPIT_API_URL"]).post('/applications/service/remote/complexData/list', params, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            token: window["__CONKPIT_TOKEN"],
            'Content-Type': 'application/json',
        }
    });
}
export var tranRSA = function (params) {
    var jsencrypt = new JSEncrypt();
    jsencrypt.setPublicKey(privateKey);
    return jsencrypt.encrypt(params);
};
// 登陆华夏数字钢厂
export var loginSZGC = function () {
    return new Promise(function (resolve, reject) {
        var ajax = axios.create({ baseURL: 'http://hxszgc.bicisims.com', timeout: timeout, maxContentLength: maxContentLength, withCredentials: withCredentials });
        ajax.request({
            url: '/api/system/user/login',
            method: 'post',
            headers: {
                token: window["__CONKPIT_TOKEN"],
                'Content-Type': 'application/json',
            },
            data: {
                account: 'admin',
                password: tranRSA("123456")
            },
        }).then(function (res) {
            console.log("loginSZGC", res.data.code);
            if (res && res.data.code == 1000) {
                resolve(res.data.data);
            }
            else {
                resolve({ front_error: 2 });
            }
        }).catch(function (error) {
            handleRequestError(error);
            resolve({ front_error: 1 });
        });
    });
};
//# sourceMappingURL=api.js.map