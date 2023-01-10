import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamsExample() {
    const params = useParams() ;
    console.log("params", params);
    console.log("useParams", useParams())
    const {name } = useParams();
  return (
    <div>ParamsExample from {`${name}'s`} page</div>
  )
}
