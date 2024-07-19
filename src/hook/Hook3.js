import React ,{useState}from 'react'

export default function Hook3() {
    console.log("a")
    const [name,setName]=useState("")
    return (
    <div>
       
        <h1>hook 3 name:{name}</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
