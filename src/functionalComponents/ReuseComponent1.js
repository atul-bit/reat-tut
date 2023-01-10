import React from 'react'
import { Table } from 'react-bootstrap'
import ReuseComponent2 from './ReuseComponent2'

export default function ReuseComponent1() {

    const users = [
        {
          name: 'Anil', email: 'anil@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
        {
          name: 'Burce', email: 'bruce@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
        {
          name: 'Peter', email: 'peter@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
        {
          name: 'Sam', email: 'sam@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
      ]

  return (
    <> <div>
        <h1>in ReuseComponent1</h1>
        {
            users.map((items,i) =>
                <ReuseComponent2 data = {items}/>
            )
        }
    </div>
    </>
    
  )
}
