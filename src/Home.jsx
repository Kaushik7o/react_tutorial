import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Home() {
  const id=5;
   const navigate=useNavigate()
    function gotoAbout()
    {
navigate("/Lrarn",{state : {id:id}})
    }
  return (
    <>
      <div>
   <div>home</div>
   <Link to="/About">About</Link><br></br>
    <button onClick={gotoAbout}>Learn more</button>
      </div>
      </>
  )
}
