import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NestedRoutedComponent() {
  return (
        <div>
            <h1>Below is teh NestedRoutedComponent example below</h1>
            <ul>

                <li><Link to="example1" >Example 1</Link></li>
                <li><Link to="example2" >Example 2</Link></li>
                <li><Link to="example3" >Example 3</Link></li>
            </ul>
            <Outlet />
        </div>
  )
}
