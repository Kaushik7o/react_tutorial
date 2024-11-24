import React,{useState} from 'react'
import axios from 'axios';
function FileUploading() {

 const [image,setImage]=useState('')

 function handleChange(e) 
 {
    console.log(e.target.files);
    
 setImage(e.target.files[0])
 }

 function handleApi()
 {
  const formData=new FormData()
  formData.append('image',image)  
  axios.post('url',formData).then((res)=>
{
    console.log(res); 
    
})
 }
  return (
    <div>
      <input type="file" name="file" onChange={handleChange}/>
      <button onClick={handleApi}>Submit</button>
    </div>
  )
}

export default FileUploading
