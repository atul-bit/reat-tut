import React from 'react'
import { CommonContext } from './CommonContext'

export default function UpdateColorButton() {
  return (
    <CommonContext.Consumer>

        {
            ({updateColor}) => (
                <div>

                    <button onClick = {() => updateColor('yellow')}>Update Yellow</button>
                    <button onClick = {() => updateColor('green')}>Update red</button>
                </div>
            )
        }
    </CommonContext.Consumer>
  )
}
