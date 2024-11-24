import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function ContextList(props) {

    const {contact,removeContact}=props;
    console.log(contact);
    
    const ContactList=contact.map((val)=>
    {

        return(
            <div className='contacts'>
                <div style={{marginLeft:"2px"}}>{val.data.name}</div>
                <div className='email'>{val.data.email}</div>
              <div onClick={()=>removeContact(val.id)}><DeleteIcon/></div>
            </div>
        )
    })
  return (
    <>
    <div className='ContactsHeader'>ContactList</div>
    <div>{ContactList}</div>
    </>
  )
}
