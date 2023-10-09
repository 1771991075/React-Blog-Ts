import http from "../utils/http";
// 用户登录
let userLogin = (data:UserLoginParams):Promise<any>=> http(`/account/login`,"post",data,{
    "Content-Type": "application/x-www-form-urlencoded"
});


export {
    userLogin
}