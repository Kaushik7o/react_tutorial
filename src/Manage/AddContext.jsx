import React,{useState} from 'react'

export default function AddContext({addContact}) {
    const[contactData,setContactData]=useState({name:"",email:""});

    const handleChange=(e)=>
    {
       
     setContactData({...contactData,[e.target.name]:e.target.value})
   
     
    }

    const handleAdd = ()=>
    {
        const btn = document.getElementsByClassName("btn")[0]; // Access the first element

        // Change the background color of the button
       
        if(contactData.name==="" || contactData.email==="")
        {
            alert("please fill all the form");
            btn.style.backgroundColor = " rgb(55, 117, 119)";
           
        }
        else{
            addContact(contactData);
            btn.style.backgroundColor = "green"; 
            setContactData({name:"",email:""})
        }
    }
  return (
    <div className='formHeader'>
      <div className='add-Contact'>Add Contact</div>
      <form action="">
        <label htmlFor="">Name:</label><br />
        <input type="text" placeholder='Enter Name' value={contactData.name} name="name" onChange={handleChange}/><br />
        <label htmlFor="">Email:</label><br/>
        <input type="email" placeholder='Enter Email' value={contactData.email} name="email" onChange={handleChange}/><br />
         
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}
