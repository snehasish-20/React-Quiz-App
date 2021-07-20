import React,{useContext} from 'react'
import {QuizContext} from "../Helpers/context"
import logo from "../images/logo.png"
import './styles/menu.css'


function Menu() {
    const{setgamestate}=useContext(QuizContext)
    return (
        <div className="menu">
            <img src={logo} alt="logo" className="logo"/>
            <p>Ready to test your brain? Take this quiz now</p>
            <button className="start" onClick={()=>{setgamestate("quiz");localStorage.clear()}}>Start</button>
        </div>
    )
}

export default Menu
