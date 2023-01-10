//shouldcomponentUpdate is called whenever we want to update a component or not
//by default it return true but if called i
//shouldcomponentUpdate is always called before compomnenetDidUpdate 

import React, { Component } from 'react'

export default class ShouldComponentUpdateExample extends Component {
    constructor()
    {
      super();
      console.warn("constructor")
      this.state={name:"atul"}
      this.updateData = this.updateData.bind(this)
    }
    componentDidMount()
    {
      console.warn("componentDidMount")
  
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called")
        // return true;
    }

    updateData(){
        this.setState({
            name : "akshay kumar"
        })
    }
  render() {
    return (
        <>
            <div>ShouldComponentUpdateExample</div>
            
        </>
    )
  }
}
