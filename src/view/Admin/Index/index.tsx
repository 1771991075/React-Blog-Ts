import React, { useState, useEffect } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    HomeOutlined,
    BarsOutlined,
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb, Avatar } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LogoutOutlined  } from '@ant-design/icons';
import showModal from '../../../component/Modal';
import './index.scss';

const { Header, Sider, Content } = Layout;
const adminNavList = [
    {
        key: '/admin/home',
        icon: <HomeOutlined />,
        label: '首页',
    },
    {
        key: '/admin/addblog',
        icon: <FileAddOutlined />,
        label: '新增博客',
    },
    {
        key: '/admin/bloglist',
        icon: <BarsOutlined />,
        label: '博客列表',
    },
    {
        key: '/admin/oneself',
        icon: <UserOutlined />,
        label: '个人中心',
    },
    {
        key: '/admin/setting',
        icon: <SettingOutlined />,
        label: '设置',
    },
]

const Admin: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();
    //定义默认展开的一级菜单key列表
    let [defaultOpenKeys, setDefaultOpenKeys] = useState('/admin/home');

    // 退出登录
    const exit = () => {
        showModal('提示:','您确定要退出吗?',function(){
            localStorage.removeItem('token')
            navigate('/login')
        },function(){})
    }

    useEffect(() => {
        // 获取当前路由路径
        let pathName = location.pathname;
        setDefaultOpenKeys(pathName);
    }, [location])

    return (
        <Layout style={{ height:'100vh' }} >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" >
                    <Avatar shape="square" size={64} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                    <p style={{ display: collapsed ? 'none' : '' }}>欢迎回来！</p>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[defaultOpenKeys]}
                    onClick={(obj) => { navigate(obj.key) }}
                    items={adminNavList}
                />
            </Sider>
            <Layout>
                <Header className='header' style={{ background: colorBgContainer }}>
                    <Button
                        className='exitBtn'
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Button type="primary" icon={<LogoutOutlined />} shape="default" onClick={exit}>退出</Button>
                </Header>
                <Breadcrumb
                    style={{ margin: '10px 20px 0px 20px' }}
                    items={[
                        {
                            href: '/admin/home',
                            title: <HomeOutlined />,
                        },
                        {
                            href: defaultOpenKeys,
                            title: (
                            <>
                                <span>{ (adminNavList.find((item:any)=>item.key === defaultOpenKeys) as any).label }</span>
                            </>
                            ),
                        }
                    ]}
                />
                <Content
                    className='content'
                    style={{ background: colorBgContainer }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Admin;