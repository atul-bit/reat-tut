//hooks are used to perform various lifecycle methods in functional component as we can access lifecycle method in class compponent only
//useState hooks are used for state management

import React,{useState} from 'react'

export default function UseStateExampleHooks() {
    const [data,setData] = useState("Atul")
  return (
    <>
        <div>UseStateExampleHooks by {data}</div>
        <button onClick={() => setData("hello World")}></button>
    </>
  )
}
