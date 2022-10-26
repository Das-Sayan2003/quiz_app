import React from 'react'
import LoadingImage from '../images/loader.gif'
import './loader.css'

const Loader = () => {
  return (
    <div className="loader">
    <h2>Your Questions are loading!!!</h2><br/>
    <p>Please Wait</p>
    <img src={LoadingImage} alt="loading"/>
    </div>
   
  )
}

export default Loader