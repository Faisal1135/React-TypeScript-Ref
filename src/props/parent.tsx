import {ChildAsFC} from './child';

const Parent = ()=>{
    return <div>
        <h2>This is Parent</h2>
        <ChildAsFC color="red" onClick={()=> console.log("CLicked ")}> This is Children</ChildAsFC>
    </div>
}

export default Parent;