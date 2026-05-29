import React from 'react'

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
import Form from './Form'
const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}


//lect4



export default App
