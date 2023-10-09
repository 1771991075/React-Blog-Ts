import http from "../utils/http";

// 获取博客列表
let getBlogList = (data: any): Promise<any> => http(`/api/getBlogList`, "get", data);

// 新增博客
let addBlog = (data: any): Promise<any> => http(`/blog/addBlog`, "post", data, {
    "Content-Type": "application/x-www-form-urlencoded"
});

// 更新博客内容
let editBlog = (data: any): Promise<any> => http(`/blog/editBlog`, "post", data, {
    "Content-Type": "application/x-www-form-urlencoded"
});

// 删除博客
let deleteBlog = (data: any): Promise<any> => http(`/blog/deleteBlog`, "post", data, {
    "Content-Type": "application/x-www-form-urlencoded"
});

export {
    getBlogList,
    addBlog,
    editBlog,
    deleteBlog
}