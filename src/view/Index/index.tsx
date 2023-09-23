import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Index: React.FC = () => {
  const navigate = useNavigate();
  // 跳转页面
  const goPage = (path: string) => {
    navigate(path);
  }

  return (
    <div>
      <Button type="primary" onClick={() => goPage('/index/blog')}>博客列表</Button>
      <Button type="primary">关于</Button>
      <Button type="primary">留言</Button>
      <Button type="primary" onClick={() => goPage('/login')}>登录</Button>
    </div>
  );
};

export default Index;