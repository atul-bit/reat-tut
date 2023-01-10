import React, { Component } from 'react'

export default class ComponentWillUnMountExample  extends Component {

    componentWillUnmount(){
        console.log('componentWillUnmount is called')
    }
    
  render() {
    return (
        <>
            <div>ComponentWillUnMount Example </div>
        </>
    )
  }
}
