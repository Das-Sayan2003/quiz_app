import React from 'react'
import Question from '../question/Question'
import '../../App.css';

function Main (props) {
  return (
    <div className='box'>
    <h1>There are 10 Questions</h1><br/>
    <h3>Click Check Answer to Check Your results!</h3><br/>
    <div className={props.gameEnd ? "box gameEnd" : "box" }>
    {props.value.map((eachQuestion,index)=>{
return (
    <Question key ={index} q={eachQuestion.question} randomizedans={props.randomizedans[index]} result={props.finalResult[index]} gameend={props.gameEnd} answer={props.answers[index]} questionSetid={index} onclick={props.onclick}/>
)
    })}
    </div>
    {props.gameEnd===true&&props.correctanscount>=0 ? (
        <div className="showresult">
          <h2 style={{fontSize:"2rem",fontFamily:"Roboto"}}>{`You scored : ${props.correctanscount} out of 10`}</h2>
        </div>
      ) : (
        ""
      )}
   <button onClick={props.checkanswer}>{props.gameEnd ? "New Game" : "Check Answers"}</button>
   </div>
  )
}

export default Main