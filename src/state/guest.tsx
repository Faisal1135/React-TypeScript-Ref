import React,{useState} from 'react'


const Guest:React.FC = ()=> {
   const [name,setname] = useState('')
   const [guests,setguest] = useState<string[]>([])

   const onbutClick =()=>{
       setguest([...guests,name])
   }
    return <div>
        <h2>Guest List</h2>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
        <button onClick={onbutClick}>Add Guest</button>
        <ul>
            {guests.map((gus)=> <li key={gus}>{gus}</li>)}
        </ul>
        

    </div>


};
export default Guest;