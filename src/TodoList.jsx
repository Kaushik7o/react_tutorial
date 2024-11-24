import React,{useState} from 'react'
import './todo.css'
function TodoList() {
    const[activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
    function addActivity()
    {
    //  setlistData([...listData,actvity]);
    //  console.log(listData);

    setlistData((list)=>
    {
     const updatedList=[...listData, activity]
     console.log(updatedList);
     setActivity('')
     return updatedList
     
    })
    }

    function removeActivity(index)//i
    {
        setlistData((prevList) => prevList.filter((_, i) => i !== index));
        //const userListData=listData.filter((elem,id)=>{
        // return i!=id;})
        //setlistData(userListData)
    }
    function removeAll()
    {
        setlistData([])
    }
  return (
    
      <>
      <div className="container">
      <div className="header">TODO LIST</div>
      <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <button onClick={addActivity}>Add</button>
      <p className="List-heading">Here is your List :{')'}</p>
      {!listData==[] && listData.map((data,i)=>
    {
        return(
        <>
        <p key={i}>
            <div className='listData'>{data}</div>
            <div className="btn-position"> <button onClick={()=>removeActivity(i)}>Remove</button></div>
           
        </p>
        </>
        )
    })}
    {listData.length>=1 &&  <button onClick={removeAll}>Remove All</button>}
   
      </div>

      </>
      
 
  )
}

export default TodoList
