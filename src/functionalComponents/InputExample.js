import React,{useState} from 'react'

export default function InputExample() {
    const [data,setData] = useState(null)
    const [print,setPrint] = useState(false)

    function changeName(val){
        setData(val.target.value);
        setPrint(false)
    }

    function printName(){
        setPrint(true)
    }
  return (
    <>
    {
        print ? <h1>{data}</h1> : null
    }
        <input type="text" onChange={changeName}/>
        <button onClick={printName}>click me</button>
    </>
  )
}
