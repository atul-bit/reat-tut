//Pure component is used to avoid re rendering of the component on same value
//Pure component allows us to render the component only when  value changes

import React, { PureComponent } from 'react'

export default class PureComponentExample extends PureComponent {
    constructor(){
        super();
        this.state ={
            count : 0
        }
    }
  render() {
    console.log("component rendered again")
    return (
        <>
            <div>PureComponentExample {this.state.count}</div>
            <button onClick={() => this.setState({count : this.state.count})}>Click me</button>
        </>
    )
  }
}
