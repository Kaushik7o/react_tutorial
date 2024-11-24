import React from 'react'
import {Link, useLocation} from 'react-router-dom'
export default function About() {
  const location=useLocation();
  console.log(location.state);
  
  return (
    <>
    <div>
      <div>Hi i am About {location.state.id}</div>
    <Link to="/Home">Home</Link><br></br>
   
    </div>
    </>
  )
}
