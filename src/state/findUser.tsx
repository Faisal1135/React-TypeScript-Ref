import React,{useState} from 'react'

const users = [
    {name:"Galib",age:23},
    {name:"Faisal",age:23},
    {name:"Kabir",age:23},
]

const FindUser:React.FC = () => {
    const [user,setUser] = useState<{name:string,age:number}[]|undefined>()
    // const [name,setName] = useState('')
    
    const onSubmit = (inp:string)=>{
      const findUser = users.filter((user)=> user.name.toLowerCase().includes(inp.toLowerCase()) )
      setUser(findUser)
    }
    return (
        <div>
            <h2>User List</h2>
            <input type="text" onChange={(e)=>onSubmit(e.target.value)}/>
            

            {user===undefined && "NO User Found"}
            <ul>
                {user && user.map((usr)=> <li key={usr.name}>{usr.name}</li>)}
            </ul>

        </div>
    )
}

export default FindUser
