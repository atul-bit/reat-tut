import React,{useState} from 'react'

export default function PropsExample(props) {
    let [name,setName] = useState(props.name)
    function clickMe(){
      setName("brother hello world!")
      console.log("button clicked")
      // alert ("hello brother!")
    }
  return (
    <>
        <div>PropsExample {name}</div>
        <button onClick={clickMe}> Click me</button>
    </>
  )
}
