import React from 'react'
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

// const Task = () => {
//   let [ApiData,SetApiData] = useState([])
//   useEffect(()=>{
//     async function call() {
//       let res = await fetch('https://dummyjson.com/products')
//       let data = await res.json();
//       //console.log(data);
//       SetApiData(data.products)
//       //console.log(data.products)
//     }
//     call()

//      }, []);
//     //sorting
//     function func2(){
//       let sorted = [...ApiData].sort((a,b)=>{
//         return a.price - b.price   // returns the price in ascending order
//       })
//       SetApiData(sorted)
//     }

//      function func3(){
//       let sorted = [...ApiData].sort((a,b)=>{
//         return b.price - a.price   // returns the price in descending order
//       })
//       SetApiData(sorted)
//     }
 

  


//   return (
//     <div id='parent_div'>
//       { /* data show */ }
//       {
//         ApiData.map((a)=>{
//           return (
//             <div id='card'>
              
//               <h2>{a.id}</h2>
//               <img src={a.thumbnail}/>
//               <h3>{a.title}</h3>
              
//             </div>
//           )
//         })
//       }
//       <button onClick={func2}>Low </button>
//       <button onClick={func3}>High</button>


//     </div>
//   )
// }

//lect6

export const Task = () => {
  return (
    <div>Task</div>
  )
}


export default Task