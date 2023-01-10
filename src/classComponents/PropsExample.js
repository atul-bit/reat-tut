import React, { Component } from 'react'

export default class PropsExample extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
