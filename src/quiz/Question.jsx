import React from 'react'

export default function Question({question,option,handleClick,currentAnswer}) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
      {option.map((options,index)=>
    {
     return(
        <li key={index} onClick={()=>handleClick(options)} className={currentAnswer===options?'selected':''}>{options}</li>
    )
    })}
  
      </ul>


    </div>
  )
}
