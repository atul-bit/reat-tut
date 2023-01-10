import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

export default function BootstrapExample() {
    const [data,setData] = useState("Atul")
  return (
    <>
        <div>UseStateExampleHooks by {data}</div>
        <Button onClick={() => setData("hello World")}>click me</Button>
    </>
  )
}
