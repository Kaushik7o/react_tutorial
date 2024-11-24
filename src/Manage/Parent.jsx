import React, { useState,useEffect } from 'react'
import './m.css'
import { v4 as uuidv4 } from 'uuid'; 
import ManageContact from './ManageContact'
import AddContext from './AddContext'
import ContextList from './ContextList'

export default function Parent() {
   const localStorageKay="contact"
    const [contact,setContact]=useState(()=>
    {
       return JSON.parse(localStorage.getItem(localStorageKay))
    || [] })
 
    useEffect(()=>
    {
     localStorage.setItem(localStorageKay,JSON.stringify(contact))
    },[contact])
    const addContact=(data)=>{
    setContact([...contact,{id:uuidv4(),data}])    
    }

    const removeContact=(id)=>
    {
      const updateList=contact.filter((val)=>
    {
        return val.id!==id;
    })
    setContact(updateList);
    }
  return (
    <div >
      <ManageContact></ManageContact>
      <AddContext addContact={addContact}></AddContext>
      <ContextList contact={contact} removeContact={removeContact}></ContextList>
    </div>
  )
}
