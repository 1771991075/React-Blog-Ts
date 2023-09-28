interface NavListType {
    [key:string]:string[]
}

let adminNavList:NavListType = {
    "home":['首页'],
    "addblog":['新增博客'],
    "bloglist":['博客列表'],
    "oneself":['个人中心'],
    "setting":['设置'],
}


export default adminNavList;