import React, { Fragment, useEffect, useState } from 'react';
import { Table, Button, Tag, Pagination, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './index.scss';

interface DataType {
    key: string;
    title: string;
    category: string;
    tag: string[];
    createTime: string;
    updateTime: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: '博客标题',
        width: 150,
        dataIndex: 'title',
        key: 'title',
        fixed: 'left',
    },
    {
        title: '类别',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',
        render: (val) => {
            return (
                <Fragment>
                    {val.map((item: string, index: number) => {
                        return (
                            <Fragment key={index}>
                                <Tag color="magenta">{item}</Tag>
                            </Fragment>
                        )
                    })}
                </Fragment>
            )
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 250,
        render: () => {
            return (
                <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="primary" icon={<SearchOutlined />} size='small' shape="default">查看</Button>
                    <Button type="primary" style={{ backgroundColor: '#EFAE2A' }} icon={<EditOutlined />} size='small' shape="default">编辑</Button>
                    <Button type="primary" danger icon={<DeleteOutlined />} size='small' shape="default">删除</Button>
                </span>
            )
        },
    },
];

const data: DataType[] = [
    {
        key: '1',
        title: 'Linux',
        category: 'linux',
        tag: ['linux'],
        createTime: '2023-09-09 12:00:00',
        updateTime: '2023-09-09 12:00:00',
    },
    {
        key: '2',
        title: 'react',
        category: 'react',
        tag: ['react','vue'],
        createTime: '2023-09-09 12:00:00',
        updateTime: '2023-09-09 12:00:00',
    },
];

const { Search } = Input;

const AdminBlogList: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);

    // 搜索框查询
    const onSearch = (value:string) => {
        console.log(value);
    }

    useEffect(() => {
        setLoading(false);
    }, [])

    return (
        <div>
            <Search className='search' placeholder="请输入关键字" onSearch={onSearch} enterButton />
            <Table columns={columns} bordered loading={loading} dataSource={data} scroll={{ x: 1300 }} pagination={false} />
            <Pagination
                style={{ margin:'20px', display:'flex', justifyContent:'center' }}
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `Total ${total} items`}
            />
        </div>
    )
}
export default AdminBlogList;