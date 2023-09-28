import React, { useState, useRef, useEffect } from 'react';
import { Button, message, Input, Radio, Select, ColorPicker, DatePicker } from 'antd';
import BlogContent from './components/blogContent';
import type { RadioChangeEvent } from 'antd';
import type { DatePickerProps } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import './index.scss';

type BlogTagType = {
    value: string;
    color: string;
}
type BlogCategoryType = {
    value: string;
    label: string;
}
type BlogInfoType = {
    title: string;
    category: string;
    summary: string;
    tag: BlogTagType[];
    content: string;
    createTime?: string;
    updateTime?: string;
};

const AdminAddBlog: React.FC = () => {
    const [blogInfo, setBlogInfo] = useState<BlogInfoType>({
        title: '',
        category: '',
        summary: '',
        tag: [
            { value: '', color: '#1677FF' }
        ],
        content: '',
        createTime: '',
        updateTime: ''
    }) // 博客信息
    const [categoryOptions, setCategoryOptions] = useState<BlogCategoryType[]>([]); // 分类列表
    const [categoryType, setCategoryType] = useState<string | number>(0); // 选择当前是选择类别还是新增类别
    const [loading, setLoading] = useState<boolean>(false); // 加载中
    //博客内容富文本标签
    let contentRef: { current: any } = useRef();
    // 选择类别还是新增类别
    const onChange = (e: RadioChangeEvent) => {
        setCategoryType(e.target.value);
    };
    // 选择类别
    const handleChangeCategory = (value: string) => {
        let data = JSON.parse(JSON.stringify(blogInfo));
        data.category = value;
        setBlogInfo(data);
    };
    // 增加标签
    const addTag = (index: number) => {
        let data = JSON.parse(JSON.stringify(blogInfo));
        data.tag.splice(index, 0, { value: '', color: '#1677FF' });
        setBlogInfo(data);
    }
    // 删除标签
    const delTag = (index: number) => {
        let data = JSON.parse(JSON.stringify(blogInfo));
        data.tag.splice(index, 1);
        setBlogInfo(data);
    }
    // 选取颜色
    const changeColor = (color: any, index: number) => {
        blogInfo.tag[index].color = color.toHexString();
    }
    // 发表时间
    const onChangeTime: DatePickerProps['onChange'] = (date, dateString) => {
        let data = JSON.parse(JSON.stringify(blogInfo));
        data.createTime = dateString;
        setBlogInfo(data);
    };
    // 提交
    const submit = () => {
        setLoading(true);
        let blogContent = contentRef.current.myEditor.txt.html();
        blogInfo.content = blogContent;
        console.log(blogInfo);
        message.success('发表成功!');
        setLoading(false);
    };

    useEffect(() => {
        setCategoryOptions([
            { label: '类别1', value: 'category1' },
            { label: '类别2', value: 'category2' },
            { label: '类别3', value: 'category3' }
        ])
    }, [])


    return (
        <div className='addblog'>
            <div className='blogitemall'>
                <div className='blogitem'>
                    <span className='span'>博客标题:</span>
                    <Input className='input' placeholder="请输入博客标题" value={blogInfo.title} onChange={(e) => {
                        let data = JSON.parse(JSON.stringify(blogInfo));
                        data.title = e.target.value;
                        setBlogInfo(data);
                    }} />
                </div>
                <div className='blogitem'>
                    <span className='span'>博客类别:</span>
                    <Radio.Group onChange={onChange} value={categoryType}>
                        <Radio value={0}>选择类别</Radio>
                        <Radio value={1}>新增类别</Radio>
                    </Radio.Group>
                </div>
                <div className='blogitem'>
                    <span className='span'></span>
                    <Select
                        style={{ display: categoryType === 0 ? 'block' : 'none', width: '100%' }}
                        placeholder="请选择博客标题"
                        onChange={handleChangeCategory}
                        options={categoryOptions}
                        value={blogInfo.category}
                    />
                    <Input style={{ display: categoryType === 1 ? 'block' : 'none' }} className='input' placeholder="请输入博客标题" />
                </div>
                <div className='blogitem'>
                    <span className='span'>博客概述:</span>
                    <Input.TextArea className='input' placeholder="请输入博客概述"
                        value={blogInfo.summary}
                        onChange={(e) => {
                            let data = JSON.parse(JSON.stringify(blogInfo));
                            data.summary = e.target.value;
                            setBlogInfo(data);
                        }} />
                </div>
                {
                    blogInfo.tag.length !== 0 && blogInfo.tag.map((item: BlogTagType, index: number) => {
                        return (
                            <div className='blogitem' key={index}>
                                <span className='span'>博客标签:</span>
                                <Input className='input' value={item.value} onChange={(e) => {
                                    let data = JSON.parse(JSON.stringify(blogInfo));
                                    data.tag[index].value = e.target.value;
                                    setBlogInfo(data);
                                }} placeholder="请输入标签名称" style={{ width: '200px' }} />
                                <ColorPicker onChange={(color) => changeColor(color, index)} placement='top' allowClear style={{ margin: '0px 10px' }} />
                                <Button disabled={blogInfo.tag.length >= 5} onClick={() => { addTag(index) }} shape="circle" icon={<PlusOutlined />} style={{ margin: '0px 10px 0px 0px' }}></Button>
                                <Button disabled={blogInfo.tag.length === 1} onClick={() => { delTag(index) }} type='primary' shape="circle" icon={<DeleteOutlined />} danger></Button>
                            </div>
                        )
                    })
                }
                <div className='blogitem'>
                    <span className='span'>发表时间:</span>
                    <DatePicker onChange={onChangeTime} style={{ width: '200px' }}/>
                </div>
            </div>
            <BlogContent ref={contentRef} />
            <div className='btn'>
                <Button type="primary" loading={loading} onClick={submit}>{loading ? '发表中...' : '发表'}</Button>
            </div>
        </div>
    );
};

export default AdminAddBlog;