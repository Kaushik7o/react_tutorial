import React from 'react'

function map() {
    let user=[
       {name:"kk",email:"kk@123"},
       {name:"kk2",email:"kk@1234"},
       {name:"kk3",email:"kk@1235"}
    ]
  return (
    <div>
        {
       user.map((item,i)=>
       
        <ul>
        <li key={i}>
        <h1>{item.name}</h1>
        <p>{item.email}</p>
        </li>
        <br />
        <li key={i}>
          <h1>{item.name}</h1>
        <p>{item.email}</p>  
        </li>
        </ul>

       )
    }
    </div>
  )
}

export default map
