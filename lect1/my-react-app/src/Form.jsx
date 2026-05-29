import React from 'react'
import { useState } from 'react'
import './App.css'

const Form = () => {
  return (
     <form>
        <input type='text' placeholder='Enter your Name'></input>
        <br></br>
        <br></br>
        <input type='email' placeholder='Enter your email'></input>
        <br></br>
        <br></br>
        <input type='text' placeholder='Enter Message'></input>
        <br></br>
        <br></br>
        <button type='submit'>Submit</button>
     </form>
  )
}

export default Form