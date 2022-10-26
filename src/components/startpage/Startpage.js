import React from "react";
import './startpage.css';

function Startpage(props) {
  return (
    <div className="startpage">
      <h1>QUIZ APP</h1>
      <p>Quiz App made in React</p>
      <button onClick={props.onClick}>Start Quiz</button>
    </div>
  );
}

export default Startpage;
