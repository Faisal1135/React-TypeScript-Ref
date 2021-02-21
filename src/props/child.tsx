import React from 'react'
interface ChildProp{
    color:string;
    onClick:()=>void
}



export const Child = ({color}:ChildProp)=>{
    return <div>This is Child {color}</div>

};

export const ChildAsFC:React.FC<ChildProp>   =({color,onClick,children})=>{
    return <div>
        <h2>This is Child As FC</h2>
        {color}
        {children}
        <button onClick={onClick}>Click ME</button>

       
    </div>
}

