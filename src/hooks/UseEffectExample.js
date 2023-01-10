//use Effect hook is a combination of componentDidMount,componentDidUpdate and componentWillUnmount lifecycle
//useEffect hook can be also called on specific states or props

import React,{useEffect, useState} from 'react'

export default function UseEffectExample(props) {
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log('use Effect is called')
    })

    //this is usd to call a useEffect only when the componnet is mounted
    useEffect(() => {
        console.log('use Effect is called only once')
    },[])

    //this is used to call whenever a specific state is changed
    useEffect(() => {
        console.log('use Effect is called whenever the data state is changed')
    },[data])

    //this is used to call whenever a specific props is changed
    useEffect(() => {
        console.log('use Effect is called whenever the count props is changed')
    },[props.count])
  return (
    <>
        <div>UseEffectExample component counter is :- {data}</div>
        <button onClick={() => setData(data+1)}>click me</button>
    </>
  )
}
