import React, { useEffect, useState } from 'react';
import { Table, Button, Pagination, Input, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';
import './index.scss';

interface DataType {
    id: string;
    value: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        width: 150,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
    },
    {
        title: '类名',
        dataIndex: 'value',
        key: 'value',
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 150,
        render: () => {
            return (
                <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="primary" danger icon={<DeleteOutlined />} size='small' shape="default">删除</Button>
                </span>
            )
        },
    },
];

const data: DataType[] = [
    {
        id: '1',
        value: 'Linux',
    },
    {
        id: '2',
        value: 'Windows',
    },
];

const { Search } = Input;

const AdminCategoryList: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false); //模态框展示状态
    const [confirmLoading, setConfirmLoading] = useState(false); // 添加分类时添加状态
    const [value, setValue] = useState<string>('');

    // 展示模态框
    const showModal = () => {
        setOpen(true);
    };
    // 添加类别名称
    const changeValue = (e: any) => {
        setValue(e.target.value)
    }
    // 确认添加
    const handleOk = () => {
        setConfirmLoading(true);
        setValue('');
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    // 关闭模态框
    const handleCancel = () => {
        setValue('');
        setOpen(false);
    };
    // 搜索框查询
    const onSearch = (value: string) => {
        console.log(value);
    }

    useEffect(() => {
        setLoading(false);
    }, [])

    return (
        <div>
            <Search className='search' placeholder="请输入关键字" onSearch={onSearch} enterButton />
            <Button className='addcategory' type="primary" onClick={showModal}>新增类别</Button>
            <Table columns={columns} bordered loading={loading} dataSource={data} scroll={{ x: 1300 }} rowKey={(record) => record.id} pagination={false} />
            <Pagination
                style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `Total ${total} items`}
            />
            <Modal
                title="添加类别"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className='addcategorymodal'>
                    <span>类别名称:</span><Input className='addinput' placeholder="请输入类别名称" width={200} value={value} onChange={(e) => changeValue(e)} />
                </div>
            </Modal>
        </div>
    )
}
export default AdminCategoryList;
