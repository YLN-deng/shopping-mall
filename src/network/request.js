// 网络请求
import axios from 'axios'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })

    // 2.axios拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config;
    }, err => {
        // console.log(err);
    })


    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        // console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}