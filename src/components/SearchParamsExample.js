import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchParamsExample() {
    const [searchParams,setSearchParams] = useSearchParams();
    console.log("searchParams", searchParams);
    const age = searchParams.get('age');
    const name = searchParams.get('name');
  return (
    <>
        <div>SearchParamsExample </div>
        <h1>Age : {age}</h1>
        <h2>Name : {name}</h2>
    </>
  )
}
