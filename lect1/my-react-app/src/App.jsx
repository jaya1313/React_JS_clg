import React, { useState } from 'react'

// //for changes visible in screen wev use useState()
// import { useState } from 'react'
// let count = 0


// export const App = () => {
//   let [count, setCount] = useState(0)
//   function func1(){
//     setCount(++count)
//   }
//   return (<>
//     <h2>{count}</h2>
//     <button onClick={func1}>add</button>
    
//     </>
//   )
//}

//lect2
// import Home from './Home'
//  import {New} from './Home'
// import {Component} from './Home'

// const App = () => {
//   let user = "jayaaaaa"
//   return (<>
//   <div><Home/></div>
//        <New/>
//        <Component/>
//        {/* //propss(properties)
//        //transfer of data  App->Home->A */}

//        <div> <Home data={user}/></div>
//         </> 
//   )
// }


//lect3
//for printing in screen we use useState
// import { useState } from 'react';
// const App = () => {
//   let [input, setInput] = useState("")
//   let [data, setData] = useState('')
//   function func1(e){
//     //console.log(e.target.value);
//     setInput(e.target.value) 
//     console.log(input);
//   }
//   function done(){
//      setData(data + " " +input)
//   }

//   return (
//     <div>
//    <h2>{data}</h2>
//     <input type='text' name='input' placeholder='Enter your name' onChange={func1}></input>
//     <button onClick={done}>Click</button>
//      </div>
//   )
// }


// FORM 
// import Form from './Form'
// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }


//lect4

// useEffect -> it will not reload the site (prints or load only once when we click button)
//counter function


import { useEffect } from 'react';
// const App = () => {
//   let [count, SetCount] = useState(0);
//   let [city, SetCity] = useState("Goa");
//   //console.log("Hello")  // you see hello runs every time when we click button
//   useEffect(()=>{
//     console.log("hello");
//   }, [city])  //if we give city , it only runs when city changes

//   return (
//     <div>
//       <h2>{count}</h2>
//       <h4>{city}</h4>
//       <button onClick={()=>SetCount(count + 1)}> click </button>
//       <button onClick={()=>SetCity("manali")}>Change</button>
//     </div>
//   )
// }


//fetching api
// import './App.css'

// export const App = () => {
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
//   })
//   return (
//     <div id='parent_div'>
//       { /* data show */ }
//       {
//         ApiData.map((a)=>{
//           return (
//             <div id='card'>
              
//               <h2>{a.id}</h2>
//               <img src={a.thumbnail}/>
              
//             </div>
//           )
//         })
//       }


//     </div>
//   )
// }

//lect5
//minor project

// // basic input validation
// import Task from './Task'
// import './App.css'
// export const App = () => {
//   let[search, SetSearch] = useState("")
//   console.log(search)
  
//     async function call() {
//        if(!search.trim()){
//         alert("Search bar is empty")
//         return;
//        }
//        let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
//        let data = await res.json();
//        console.log(data);
//     }

//     function fun1(e){
//       SetSearch(e.target.value)
//     }

  

//   return (
//     <div>
      
//       <input type='text'  placeholder='Search by Name' onChange={fun1}/>
//       <button onClick={ call}>Check</button>
//       <Task/>
//     </div>  
//       )
// }

// //lect6

// //react router DOM
// import {Route, Routes} from "react-router-dom"
// import NavBar from './NavBar'
// import Home from './Home'
// import About from './About'
// import Task from './Task'

// const App = () =>{
//     return (
//         <div>
//             <NavBar/>
//            <Routes>  {  /* // it will not reload the page when we click on link */}
//                  <Route path='/' element={<Home/>}/> {/*  // when we click on home it will show home component */}
//                  <Route path='/about' element={<About/>}/>
//                  <Route path='/task' element={<Task/>}/>
//             </Routes>
//             </div>
//     )
// }


//lect7
//todo list

import Todo from './Todo'

export const App = () => {
  return (
    <div>
        <Todo/>
    </div>
  )
}


export default App
