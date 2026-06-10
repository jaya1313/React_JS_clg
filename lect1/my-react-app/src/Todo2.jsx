// import React from 'react'
// import { useState } from 'react'
// import './Todo.css'
// import './App.css'
// import { useReducer } from 'react'

// // todo list using useReducer
// // useReducer is used when we have complex state management and also when we have to update the state based on the previous state and also when we have to update multiple states at the same time


// const Todo2 = () => {
//     //useReducer takes two arguments one is the reducer function and the other is the initial state and it returns an array with two elements one is the current state and the other is the dispatch function which we can use to update the state

//     const [state, dispatch] = useReducer(reducer, {task: '', todos: [], index: null}) //it will return the current state and a dispatch function which we can use to update the state and the initial state is an object with three properties task, todos and index

//     function reducer(state, action){

//     }

//     const func1 = (e) =>{
//         console.log(e.target.value);
//     }

//   return (
//     <div className="container">
//         <h2> Todo List</h2>
//         <div className="input-container">
//             <input type='text' placeholder='Enter your task' name='task' value={task} onChange={func1}></input>
//             <button onClick={func2}> Add Task</button>

//         </div>
        
//     </div>
//   )
// }

// export default Todo2


// todo list using useContext

import React from 'react'
import { useContext } from 'react'
import { storeContext } from './Context'
import './Todo.css'

const Todo2 = () => {
    let {store, dispatch} = useContext(storeContext)
  return (
    <div className="container">
        <h2> Todo List</h2>
        <div className="input-container">
            <input type='text' placeholder='Enter your Task' onChange={(e) => dispatch({type: 'Set_inp', payload: e.target.value})}/>
            <button onClick={() => dispatch({type: 'Add_task'})}> Add Task </button>
        </div>

{
    store.todos.map((a) =>{
        console.log(a);
        return (
         <div><h6> {a}</h6>  
        </div> 
    )
    })
}
    </div>
  )
}

export default Todo2

