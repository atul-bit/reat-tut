import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(){
        super();
        this.state = {
            data : "atul"
        }
        
        // Binding this keyword
        this.updateData = this.updateData.bind(this)
    }
    updateData(){
        this.setState({data : "Yogita"})
    }
  render() {
    return (
      <>
        StateExample in class component <h1>{this.state.data}</h1>
        <br />
        <button onClick={this.updateData}> click me</button>
      </>
      
    )
  }
}
