import axios from 'axios'
import React,{useState,useEffect} from 'react'

 function Axio() {
    let [userData,setData]=useState([])
    useEffect(()=>
    {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response);
      setData(response.data);
    
    })
    
    },[])
   
  return (
    <div>
      
       {userData.map((data) => (
            <h1 >{data.name}</h1> // Added return by using parentheses
          ))}
      <button onClick={()=>setData([])}>Remove fetchData</button>
    </div>
  )
}

export default Axio
