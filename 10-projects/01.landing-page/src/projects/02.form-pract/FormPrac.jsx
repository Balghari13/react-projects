import React from 'react'
import Navigation from './Navigation'
import FormSection from './FormSection'
import './form.css'
const FormPrac = () => {

  function handelDice(){
  return Math.floor(Math.random()*4)+1

  }
  return (
    <>
    <Navigation/>
    <FormSection/>
    <div>
     

      <button onClick={handelDice}>Dice</button>
    </div>
    </>
  )
}

export default FormPrac