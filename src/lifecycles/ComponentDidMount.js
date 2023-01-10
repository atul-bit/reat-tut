//component did mount is called after the whole dom is loaded
//component did mount are generally used for api calls

import React, { Component } from 'react'

export default class ComponentDidMountExample extends Component {
    constructor()
    {
      super();
      console.warn("constructor")
      this.state={name:"anil"}
    }
    componentDidMount()
    {
      console.warn("componentDidMount")
  
    }
    render() {
        console.warn("render")
        return (
        <div>ComponentDidMountExample</div>
        )
    }
}
