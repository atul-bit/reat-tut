//state up lifting is used to send data from child to parent node

import React from 'react'

export default function ChildComponent(props) {
  return (
    <>
        <div>child component</div>
        <button onClick={() => props.alert("hello atul")}>Click me</button>
    </>
  )
}
