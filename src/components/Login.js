import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    function loginCheck(){
        localStorage.setItem('login', true)
    }
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    },[])
  return (

    <>
    <div>
        <h1>Login form</h1>
        <input type="text" placeholder="enter mail id"/>
        <br />
        <br />
        <input type="password" placeholder="enter password"/>
        <br />
        <br />
        <button onClick={loginCheck}>Login</button>

    </div>
    </>
  )
}
