import React, { useEffect } from 'react';
import Component1 from './component/component1';

const AdminHome: React.FC = () => {

    useEffect(()=>{
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
