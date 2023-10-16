import React, { useState, useEffect } from 'react';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

const AdminOneself: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [nowTime, setNowTime] = useState<any>('');

    useEffect(() => {
        const timer = setInterval(() => {
            setNowTime(moment().format("YYYY-MM-DD HH:mm:ss"));
        }, 1000)
        return ()=>{
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <Descriptions bordered>
                <Descriptions.Item label="项目名称">个人博客</Descriptions.Item>
                <Descriptions.Item label="前端技术栈">React</Descriptions.Item>
                <Descriptions.Item label="后端技术栈">Nodejs</Descriptions.Item>
                <Descriptions.Item label="上线时间">2020-12-20 18:00:00</Descriptions.Item>
                <Descriptions.Item label="维护时间" span={2}>
                    {nowTime}
                </Descriptions.Item>
                <Descriptions.Item label="网站状态" span={3}>
                    <Badge status="processing" text="running" />
                </Descriptions.Item>
                <Descriptions.Item label="关于我">web前端开发</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1<br />
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default AdminOneself;