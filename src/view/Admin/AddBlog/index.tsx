import React, { useState, useRef } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import GoodsContent from './components/blogContent';

type FieldType = {
    username?: string;
    password?: string;
};

const AdminAddBlog: React.FC = () => {

    //博客内容富文本标签
    let contentRef:{current:any} = useRef();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        let goods_introduce = contentRef.current.myEditor.txt.html();
        console.log(goods_introduce);
        
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <GoodsContent ref={contentRef}/>
        </div>
    )
}
export default AdminAddBlog;