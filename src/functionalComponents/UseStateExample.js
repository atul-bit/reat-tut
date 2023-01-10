import React,{useState} from 'react'

export default function UseStateExample() {
  let [count,setCount] = useState(0)
  function clickMe(){
    setCount(count+1)
    console.log("button clicked")
    // alert ("hello brother!")
  }
  return (
    <div>
      <h2>
        OnClick {count}
      </h2>
      <button onClick={clickMe}>
        Click me
      </button>
    </div>
  )
}
