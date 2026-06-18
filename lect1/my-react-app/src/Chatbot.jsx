import React, { useState } from 'react'
import './Chatbot.css'
import {GoogleGenerativeAI} from '@google/generative-ai'

const chatbot = () => {
    let[searchData, SetSearchData] = useState('')

    let genAi = new GoogleGenerativeAI("");
    async function search(){
        try{
            let model = genAi.getGenerativeModel({
                model:"gemini-2.5-flash"
            })
            let res = await model.generateContent(searchData)
            console.log(res.response.text());
        }
        catch(er){
            
        }
    }
  return (
    <div className='container'>
        <h3> Gemini Chat</h3>

        <p> Its Time to your Move!</p>

        <footer>
            <input type='text' placeholder='Add a Query'></input>
            <button>Send</button>
        </footer>

    </div>
  )
}

export default chatbot