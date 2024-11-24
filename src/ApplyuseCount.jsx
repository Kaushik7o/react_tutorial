import React from 'react'
import './App.css'
import useCounter from './useCounter'
function ApplyuseCount() {

    const [count,Increment,Decrement]= useCounter
  return (
    <div className='app'>
      <div>{count}</div>
      <button onClick={Increment}>{Increment}</button>
      <button onClick={Decrement}>{Decrement}</button>

    </div>
  )
}

export default ApplyuseCount
