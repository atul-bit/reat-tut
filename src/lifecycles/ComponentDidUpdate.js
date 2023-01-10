//component Did update is called whenever the state changes its value.

import React, { Component } from 'react'

export default class ComponentDidUpdateExample extends Component {
    constructor(){
        super()
        this.state ={
            name : "atul"
        }
        this.updateData = this.updateData.bind(this)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }

    componentDidMount(){
        console.log("componentDidMount called")
    }

    updateData(){
        this.setState({
            name : "akshay kumar"
        })
    }

  render() {
    return (
        <>
            <div>ComponentDidUpdateExample {this.state.name}</div>
            <button onClick={this.updateData}> click me</button>
        </>
    )
  }
}
