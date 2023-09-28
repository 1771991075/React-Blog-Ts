import React, { useState, useRef, Fragment } from 'react';
import { Button, message, Steps, theme, Form, Input } from 'antd';
import BlogContent from './components/blogContent';

type FieldType = {
    username?: string;
    password?: string;
};

const AdminAddBlog: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    // 提交表单
    const onFinish = (values: any) => {
        console.log('Success:', values);
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
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="博客标题"
                    name="title"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="博客类别"
                    name="category"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="博客概述"
                    name="summary"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="博客标签"
                    rules={[{ required: true }]}
                >
                    <Fragment>
                        
                    </Fragment>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminAddBlog;