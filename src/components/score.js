import React,{useContext} from 'react'
import {Questions} from "../Helpers/questions"
import {QuizContext} from "../Helpers/context"
import logo from "../images/logo.png"
import './styles/endscreen.css'

function Score() {
    var index=0
    var counter=0
    const{setgamestate,selection,setSelection}=useContext(QuizContext)
    function restart()
    {
        localStorage.clear()
        setgamestate("menu")
        setSelection([0,0,0])
    }
    selection.map(selection=>selection===Questions[index++].answer?counter++:counter)
    return (
        <div className="endscreen">
            <img src={logo} alt="logo" className="logo"/>
            <p>Your Score is {counter} out of {Questions.length}</p>
            <button onClick={()=>restart()} className="restart">Restart</button>
        </div>
    )
}

export default Score
