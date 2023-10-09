import React, { useEffect, useState } from 'react';
import Component1 from './component/component1';

const AdminHome: React.FC = () => {

    const [time,setTime] = useState<boolean>(false);

    const sleep = (timeout:number):Promise<any>=> {
        let flag = new Promise((reslove:any,reject:any)=>{
            setTimeout(()=>{
                reslove('执行了');
            },timeout)
        })
        return flag
    };

    useEffect(()=>{
        sleep(5000).then((res)=>{
            console.log(res);
        });
        console.log('父组件渲染了');
        return () => {
            console.log('父组件卸载了');
        }
    },[])

    return (
        <div>
            <h1>AdminHome</h1>
            <Component1></Component1>
        </div>
    )
}
export default AdminHome;
