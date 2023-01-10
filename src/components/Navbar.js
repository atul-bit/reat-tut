//we use navlink instead of <a> because <a> will refresh the page but nav link will not

import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <div>Navbar Exmaple </div>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </>
  )
}
