import { lazy, Suspense } from "react";
import { Navigate } from 'react-router-dom';
import Loading from "../component/Loading";
const NotFound = lazy(()=>import('../component/NotFound'));
const Index = lazy(()=>import('../view/Index'));
const Login = lazy(()=>import('../view/Login'));
const Home = lazy(()=>import('../view/Home'));
const Blog = lazy(()=>import('../view/Blog'));
const Admin = lazy(()=>import('../view/Admin/Index'));
const AdminHome = lazy(()=>import('../view/Admin/Home'));
const AdminAddBlog = lazy(()=>import('../view/Admin/AddBlog'));
const AdminBlogList = lazy(()=>import('../view/Admin/BlogList'));

const element:RouterObject[] = [
    {
        path: '/index',
        element: <Suspense fallback={<Loading/>}><Index /></Suspense>,
        author: false,
        children:[
            {
                path:'home',
                element:<Suspense fallback={<Loading/>}><Home /></Suspense>,
                author:false
            },
            {
                path:'blog',
                element:<Suspense fallback={<Loading/>}><Blog /></Suspense>,
                author:false
            },
        ]
    },
    {
        path: '/admin',
        element: <Suspense fallback={<Loading/>}><Admin /></Suspense>,
        author: true,
        children:[
            {
                path:'home',
                element:<Suspense fallback={<Loading/>}><AdminHome /></Suspense>,
                author:true
            },
            {
                path:'addblog',
                element:<Suspense fallback={<Loading/>}><AdminAddBlog /></Suspense>,
                author:true
            },
            {
                path:'bloglist',
                element:<Suspense fallback={<Loading/>}><AdminBlogList /></Suspense>,
                author:true
            },
        ]
    },
    {
        path: '/login',
        element: <Suspense fallback={<Loading/>}><Login /></Suspense>,
        author: false
    },
    {
        path: '/',
        element: <Navigate to={'/index/home'}></Navigate>,
        author: false
    },
    {
        path: '*',
        element: <Suspense fallback={<Loading/>}><NotFound /></Suspense>,
        author: false
    },
]

export default element;