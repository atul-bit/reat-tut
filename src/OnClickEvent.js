import React from 'react'

export default function OnClickEvent() {
  let name = "Atul"
  function clickMe(){
    name = "yogita"
    console.log("button clicked")
    alert ("hello brother!")
  }
  return (
    <div>
      <h2>
        OnClick {name}
      </h2>
      <button onClick={clickMe}>
        Click me
      </button>
    </div>
  )
}
