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
import Home from './Home'
import {New} from './Home'
import {Component} from './Home'

const App = () => {
  return (<>
  <div><Home/></div>
       <New/>
       <Component/>
        </> 
  )
}

//propss(properties)

const App2 = () =>{
  let user = "jayaaaaa"
  return (
    <div> <Home data={user}/></div>
  )
}

export default App
