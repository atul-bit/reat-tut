import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function USeNavigateExample() {
    const navToPage = useNavigate();
    function navigate(url){
        navToPage(url)
    }
  return (
    <>
        <div>USeNavigateExample !!!</div>
        <Button onClick = {() => navigate('/home')}>Go to Home Page On Click</Button>
        <Button onClick = {() => navigate('/about')}>Go to About Page On Click</Button>
    </>
  )
}
