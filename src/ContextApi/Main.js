import React from 'react'
import { CommonContext } from './CommonContext'

export default function Main() {
  return (
    <CommonContext.Consumer>
        {
            ({bgcolor}) => (
                
                <div style = {{backgroundColor:bgcolor}}>
                    <h2>Hello i am from Main page</h2> 
                </div>
            )
        }

    </CommonContext.Consumer>
  )
}
