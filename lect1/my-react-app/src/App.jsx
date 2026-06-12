import { useState } from 'react'

// // //for changes visible in screen wev use useState()
// // import { useState } from 'react'
// // let count = 0


// // export const App = () => {
// //   let [count, setCount] = useState(0)
// //   function func1(){
// //     setCount(++count)
// //   }
// //   return (<>
// //     <h2>{count}</h2>
// //     <button onClick={func1}>add</button>
    
// //     </>
// //   )
// //}

// //lect2
 //import Home from './Home'
// //  import {New} from './Home'
// // import {Component} from './Home'

// // const App = () => {
// //   let user = "jayaaaaa"
// //   return (<>
// //   <div><Home/></div>
// //        <New/>
// //        <Component/>
// //        {/* //propss(properties)
// //        //transfer of data  App->Home->A */}

// //        <div> <Home data={user}/></div>
// //         </> 
// //   )
// // }


// //lect3
// //for printing in screen we use useState
// // import { useState } from 'react';
// // const App = () => {
// //   let [input, setInput] = useState("")
// //   let [data, setData] = useState('')
// //   function func1(e){
// //     //console.log(e.target.value);
// //     setInput(e.target.value) 
// //     console.log(input);
// //   }
// //   function done(){
// //      setData(data + " " +input)
// //   }

// //   return (
// //     <div>
// //    <h2>{data}</h2>
// //     <input type='text' name='input' placeholder='Enter your name' onChange={func1}></input>
// //     <button onClick={done}>Click</button>
// //      </div>
// //   )
// // }


// // FORM 
// // import Form from './Form'
// // const App = () => {
// //   return (
// //     <div>
// //       <Form/>
// //     </div>
// //   )
// // }


// //lect4

// // useEffect -> it will not reload the site (prints or load only once when we click button)
// //counter function


// import { useEffect } from 'react';
// // const App = () => {
// //   let [count, SetCount] = useState(0);
// //   let [city, SetCity] = useState("Goa");
// //   //console.log("Hello")  // you see hello runs every time when we click button
// //   useEffect(()=>{
// //     console.log("hello");
// //   }, [city])  //if we give city , it only runs when city changes

// //   return (
// //     <div>
// //       <h2>{count}</h2>
// //       <h4>{city}</h4>
// //       <button onClick={()=>SetCount(count + 1)}> click </button>
// //       <button onClick={()=>SetCity("manali")}>Change</button>
// //     </div>
// //   )
// // }


// //fetching api
// // import './App.css'

// // export const App = () => {
// //   let [ApiData,SetApiData] = useState([])
// //   useEffect(()=>{
// //     async function call() {
// //       let res = await fetch('https://dummyjson.com/products')
// //       let data = await res.json();
// //       //console.log(data);
// //       SetApiData(data.products)
// //       //console.log(data.products)
// //     }
// //     call()
// //   })
// //   return (
// //     <div id='parent_div'>
// //       { /* data show */ }
// //       {
// //         ApiData.map((a)=>{
// //           return (
// //             <div id='card'>
              
// //               <h2>{a.id}</h2>
// //               <img src={a.thumbnail}/>
              
// //             </div>
// //           )
// //         })
// //       }


// //     </div>
// //   )
// // }

// //lect5
// //minor project

// // // basic input validation
// // import Task from './Task'
// // import './App.css'
// // export const App = () => {
// //   let[search, SetSearch] = useState("")
// //   console.log(search)
  
// //     async function call() {
// //        if(!search.trim()){
// //         alert("Search bar is empty")
// //         return;
// //        }
// //        let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
// //        let data = await res.json();
// //        console.log(data);
// //     }

// //     function fun1(e){
// //       SetSearch(e.target.value)
// //     }

  

// //   return (
// //     <div>
      
// //       <input type='text'  placeholder='Search by Name' onChange={fun1}/>
// //       <button onClick={ call}>Check</button>
// //       <Task/>
// //     </div>  
// //       )
// // }

// // //lect6

// // //react router DOM
// // import {Route, Routes} from "react-router-dom"
// // import NavBar from './NavBar'
// // import Home from './Home'
// // import About from './About'
// // import Task from './Task'

// // const App = () =>{
// //     return (
// //         <div>
// //             <NavBar/>
// //            <Routes>  {  /* // it will not reload the page when we click on link */}
// //                  <Route path='/' element={<Home/>}/> {/*  // when we click on home it will show home component */}
// //                  <Route path='/about' element={<About/>}/>
// //                  <Route path='/task' element={<Task/>}/>
// //             </Routes>
// //             </div>
// //     )
// // }


// //lect7
// //todo list

// import Todo from './Todo'

// export const App = () => {
//   return (
//     <div>
//         <Todo/>
//     </div>
//   )
// }

//lect8
//use reducer  - it is samme as useStatebut it is used when we have complex state management and also when we have to update the state based on the previous state and also when we have to update multiple states at the same time

// import React from 'react'
// import {useReducer} from 'react'

//  const App = () => {
//   function reducer()

//   return (
//     <div>App</div>
//   )
// }

// export default App

//different buttons to change the background color using useReducer
//how actually useReducer works
//reducer function takes the current state and an action as arguments and returns the new state based on the action

import React from 'react'
import {useReducer} from 'react'

// const App = () => {
//   function reducer(color, action){
//     if(action === "red"){
//       return "red"
//     }
//     else if(action === "green"){
//       return "green"
//     }
//     else if(action === "yellow"){
//       return "yellow"
//     }
//     else if(action === "blue"){
//       return "blue"
//     }
//     else{
//       return color
//     }

//   }
//   let [color, dispatch] = useReducer(reducer, "white") //it will return the current state and a dispatch function which we can use to update the state and the initial state is white
//   return (
//     <div style={{backgroundColor: color, height: "100vh"}}> {/* it will set the background color of the div to the current state and also set the height of the div to 100vh */}
//       <button onClick={() => dispatch("red")}>Red</button>
//       <button onClick={() => dispatch("green")}>Green</button>
//       <button onClick={() => dispatch("yellow")}>Yellow</button>
//       <button onClick={() => dispatch("blue")}>Blue</button>
//     </div>
//   )
// }

// lect 10
// useContext -> it is used to share data between components without passing props through every level of the component tree

// tree- main -> App -> home ...
// if we want to share data from main to home we have to pass props from main to App and then from App to home but with useContext we can directly share data from main to home without passing props through every level of the component tree.

// import Home from './Home'
// import Context from './Context'

//  const App = () => {
//   return (
//     <div>
//       <Home/> // it will print om in screen because we have given value as om in context provider in main.jsx
//     </div>
//   )
// }


// import NavBar from "./NavBar"

// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"

// const App = () => {
//   let [apiData,SetApiData] =   useState([])
//  let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
//     </div>
//   )
// }


//lect14  //todo list using useContext

// import Todo2 from './Todo2'
// const App = () => {
//   return (
//     <div>
//       <Todo2/>
//     </div>
//   )
// }

// export default App

// toggle (dark to light mode)

// import React from 'react'
// import DarkLight from './DarkLight'

// const App = () => {
//   return (
//     <div>
//       <DarkLight/>
//     </div>
//   )
// }

// export default App


//react router dom

// import NavBar from './NavBar'
// import {Routes} from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import About from './About'
// import Home from './Home'
// import Task from './Task'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/task' element={<task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App



const App = () => {
 let [count,SetCount]=   useState(0)
 let res=0
 for(let i=0;i<100000000;i++){
  res+=i

 }
  return (
    <div>
      <h1>{res}</h1>
      <h1>{count}</h1>
      <button onClick={()=>SetCount(count+1)}>add</button>
    </div>
  )
}

export default App