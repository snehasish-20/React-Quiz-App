import React,{useState,useContext,useEffect} from 'react'
import './styles/quiz.css'
import {Questions} from "../Helpers/questions"
import {QuizContext} from "../Helpers/context"

function Quiz() {
    const[currentQuestion,setCurrentQuestion ]=useState(0)
    const{selection,setSelection,setgamestate}=useContext(QuizContext)
    var state="quiz"
    useEffect(()=>{
      localStorage.setItem('gamestate',state)
      localStorage.setItem('selection',selection)
    })
    const selected=(x)=>{
      let arr=selection
      arr[currentQuestion]=x
      setSelection(arr)
      if(currentQuestion+1<Questions.length)
       setCurrentQuestion(currentQuestion+1)
    }
    const changequestion=(x)=>{
      if(x<0)
      setCurrentQuestion(0)
      else if(x>Questions.length-1)
       setCurrentQuestion(Questions.length-1)
     else
     setCurrentQuestion(x)
    }
    const submit=()=>{
      state="end"
      setgamestate(state)
      localStorage.setItem('gamestate',state)
    }
    return (
        <div className="quiz">
          <div>
            <span className="countdown"></span>
          </div>
          <div className="quizContainer">
              <div className="questionContainer">
                <div className="questionNo">
                  <span>{currentQuestion+1}/{Questions.length}</span>
                </div>
                <p className="question">{Questions[currentQuestion].prompt}</p>
                <span className="mark">?</span>
              </div>
              <div className="btnContainer">
                <button className={"op1"==="op"+selection[currentQuestion]?"answers selected":"answers"}onClick={()=>selected("1")}>{Questions[currentQuestion].op1}</button>
                <button className={"op2"==="op"+selection[currentQuestion]?"answers selected":"answers"} onClick={()=>selected("2")}>{Questions[currentQuestion].op2}</button>
                <button className={"op3"==="op"+selection[currentQuestion]?"answers selected":"answers"} onClick={()=>selected("3")}>{Questions[currentQuestion].op3}</button>
                <button className={"op4"==="op"+selection[currentQuestion]?"answers selected":"answers"} onClick={()=>selected("4")}>{Questions[currentQuestion].op4}</button>
              </div>
              {currentQuestion+1===Questions.length?<div className="questionChange">
                <button onClick={()=>changequestion(currentQuestion-1)}>Previous</button>
                <button onClick={submit}>Submit</button>
              </div>:
              <div className="questionChange">
                  <button onClick={()=>changequestion(currentQuestion-1)}>Previous</button>
                  <button onClick={()=>changequestion(currentQuestion+1)}>Next</button>
              </div>}
          </div>
        </div>
    )
}

export default Quiz
