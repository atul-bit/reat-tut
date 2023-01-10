import React,{useState} from 'react'

export default function StateWithObject() {
    const [data,setData] = useState({name : ''})
  return (
    <>
        <div>StateWithObject Example</div>
        <h1>name : {data.name ? data.name : ''}</h1>
        <input type="text" placeholder='type name' onChange ={(e) => setData({...data,name : e.target.value})}/>
        <h2>age : {data.age ? data.age : ''}</h2>
        <input type="text" placeholder='type age' onChange ={(e) => setData({...data,age : e.target.value})}/>
    </>

  )
}
