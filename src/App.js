import React,{useState,useEffect} from 'react'
import './App.css';
import Menu from './components/menu';
import Quiz from './components/quiz';
import Score from './components/score';
import {QuizContext} from "./Helpers/context"


function App() {
  const[gamestate,setgamestate]=new useState("menu")
  const[score,setScore]=useState(0)
  const[selection,setSelection]=useState([0,0,0])
  useEffect(()=>{
    const state=localStorage.getItem('gamestate')
    if(state)
     setgamestate(state)
    const select=localStorage.getItem('selection')
    if(select)
      setSelection(select.split(","))
  },[gamestate,setgamestate])
  return (
    <div>
      <QuizContext.Provider value={{gamestate,setgamestate,score,setScore,selection,setSelection}}>
        {gamestate==="menu" && <Menu/>}
        {gamestate==="quiz" && <Quiz/>}
        {gamestate==="end" && <Score/>}
      </QuizContext.Provider>
    </div>
    
  );
}

export default App;
