import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Button } from 'antd';

const { Header, Content, Footer } = Layout;

const Index: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { token: { colorBgContainer } } = theme.useToken();
  // 导航列表
  const [navList, setNavList] = useState<navListItemType[]>([
    { key: '/index/home', label: '首页' },
    { key: '/index/blog', label: '文章' },
    { key: '/index/feedback', label: '留言' },
    { key: '/index/about', label: '关于' },
  ]);
  //定义默认展开的一级菜单key列表
  let [defaultOpenKeys, setDefaultOpenKeys] = useState<string>('/index/home');
  //改变主题

  useEffect(() => {
      // 获取当前路由路径
      let pathName = location.pathname;
      setDefaultOpenKeys(pathName)
  }, [location])

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={navList}
          selectedKeys={[defaultOpenKeys]}
          style={{ marginLeft: '100px' }}
          onClick={(obj) => {
              navigate(obj.key)
          }}
        />
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer, minHeight: '100vh' }}>
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Index;