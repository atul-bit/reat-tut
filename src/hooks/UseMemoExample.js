//useMemo works same as pure component in class component
//this is used to improve the performance of componet as well as the page

import React, { useState, useMemo } from 'react'

export default function UseMemoExample() {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);

    const multiply =() => {
        console.log("function called");
        return count * 5;
    }

    const useMemoExample1 = useMemo(multiply,[count])
  return (
    <>
        <div>UseMemoExample Here</div>
        <h2>count : {count}</h2>
        <h2>item : {item}</h2>
        <h2>Multiply function Called : {useMemoExample1}</h2>
        <button onClick={() => setCount(count+1)}> update count</button>
        <button onClick={() => setItem(item*10)}> update item</button>

    </>
  )
}
