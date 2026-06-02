import React from 'react'
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Task = () => {
  let [ApiData,SetApiData] = useState([])
  useEffect(()=>{
    async function call() {
      let res = await fetch('https://dummyjson.com/products')
      let data = await res.json();
      //console.log(data);
      SetApiData(data.products)
      //console.log(data.products)
    }
    call()
  })
  return (
    <div id='parent_div'>
      { /* data show */ }
      {
        ApiData.map((a)=>{
          return (
            <div id='card'>
              
              <h2>{a.id}</h2>
              <img src={a.thumbnail}/>
              <h3>{a.title}</h3>
              
            </div>
          )
        })
      }


    </div>
  )
}

export default Task