import axios ,{AxiosHeaders} from 'axios';
import store from '../redux';
import {message} from 'antd';
axios.defaults.baseURL = '/blog';
axios.defaults.timeout = 10000;

//请求拦截
axios.interceptors.request.use((config:any)=>{
    //设置请求头
    // let token = localStorage.getItem('token')
    let token = store.getState().userReducer.token
    config.headers.Authorization = token
    return config
})

//响应拦截
axios.interceptors.response.use((res:any)=>{
    console.log('*****',res);
    
    if(res.data.code === 401 || res.data.code === 400){
        window.location.href = '#/login'
        message.error(res.data.msg)
        return
    }
    if(res.data.code !== 200 && res.data.code !== 201 && res.data.code !== 204){
        message.error(res.data.msg)
        return 
    }
    return res
})

let http = (url:string,method:string,data:DataParams={},headers?:any) =>{
    return axios({
        url,
        method,
        params:method==='get'?data:null,
        data:method!=='get'?data:null,
        headers
    })
}

export default http;