import React from 'react'

function Map1() {
    let user=[
       {name:"kk",email:"kk@123"},
       {name:"kk2",email:"kk@1234"},
       {name:"kk3",email:"kk@1235"}
    ]
  return (
    <div>
        {
       user.map((item,i)=>
       
        item.name.length>2?
        <ul>
          
        <li key={i}>
        <h1>{item.name}</h1>
        <p>{item.email}</p>
        </li>
       
        </ul>:null

       )
    }
    </div>
  )
}

export default Map1
