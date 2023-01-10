import React,{useState} from 'react'

export default function HideShow() {
    const [status,setStatus] = useState(false)
    function showHide(){
        setStatus(!status)
    }
  return (

    <>
        {
            status ? <div>HideShow</div> : null
        }
        <button onClick = {showHide}>Toggle</button>
    </>
  )
}
