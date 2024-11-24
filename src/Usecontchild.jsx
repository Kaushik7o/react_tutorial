import React,{useContext} from 'react'
import {data1,data2} from './Usecont'
function Usecontchild() {
    const f=useContext(data1)
    const l=useContext(data2)
  return (
    <div>
     <h1>{f+l}</h1>
    </div>
  )
}

export default Usecontchild
