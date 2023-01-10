import React from 'react'
import ChildComponent from './StateLifting'

export default function Parent() {
    function fromChild(data){
        alert(data)
    }
  return (
    <>
        <div>Parent component</div>
        <ChildComponent alert={fromChild}/>
    </>
  )
}
