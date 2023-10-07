import React, { useEffect } from 'react'

export default function Component1() {

    useEffect(()=>{
        console.log('子组件渲染了');
        return () => {
            console.log('子组件卸载了');
        }
        
    },[])

    return (
        <div>component1</div>
    )
}
