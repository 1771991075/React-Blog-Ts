import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';

const { confirm } = Modal;

const showModal = (title:string,content:string,ok:any,calcel?:any) => {
    confirm({
        title: title,
        icon: <ExclamationCircleFilled />,
        content: content,
        onOk() {
            ok()
        },
        onCancel() {
            calcel()
        },
    });
};

export default showModal;