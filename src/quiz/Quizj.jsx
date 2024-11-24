
import './quiz.css'
import Question from './Question'
import React,{ useState } from 'react'
export default function Quiz() {
let que=[
  {
question:"what is React?",
option:['CSS Framework','React Library','React Framework','testing toll'],
answer:"React Library"
  },
  {
question:"what is 2 * 2?",
option:['3','4','5','6'],
answer:'4'
  }

  ]
  
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  const [currentAnswer,setCurrentAnswer]=useState(null)
  const [score,setScore]=useState(0)


  const handleClick=(option)=>
  {
    setCurrentAnswer(option);
    if(option===que[currentQuestionIndex].answer)
    {
    setScore(score+1)
    }
  }

  const handleNext=()=>
  {
    setCurrentQuestionIndex(currentQuestionIndex+1)
    setCurrentAnswer(null)
  }
  return (
    <div>
      {currentQuestionIndex<que.length?
       <div>
        <Question question={que[currentQuestionIndex].question}
        option={que[currentQuestionIndex].option}
        answer={que[currentQuestionIndex].answer} handleClick={handleClick}  currentAnswer={currentAnswer}></Question>
        <button disabled={currentAnswer===null} className={currentAnswer===null?'button-disable':'button'} onClick={handleNext}>Next</button>
       </div>
:<div>Your score is {score}</div>}
    </div>
  )
}