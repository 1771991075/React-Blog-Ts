import React, { useState, useEffect } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    HomeOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

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
]

const Admin: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();
    //定义默认展开的一级菜单key列表
    let [defaultOpenKeys, setDefaultOpenKeys] = useState('/admin/home');

    useEffect(() => {
        // 获取当前路由路径
        let pathName = location.pathname;
        setDefaultOpenKeys(pathName);
    }, [location])

    return (
        <Layout style={{ height:'100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[defaultOpenKeys]}
                    onClick={(obj) => { navigate(obj.key) }}
                    items={adminNavList}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
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
                    style={{
                        margin: '10px 16px 20px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Admin;