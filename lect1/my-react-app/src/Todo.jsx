// import React from 'react'
// import './Todo.css'
// import './App.css'
// import { useState } from 'react'
// import { useEffect } from 'react'


// const Todo = () => {
//     let [task, setTask] = useState('');
//     let[index, setIndex] = useState(null);
//     let [todos, setTodos] = useState(() =>{
//         let data = localStorage.getItem("key") //it will get the data from the local storage with the key "key
//          if(data){
//          return JSON.parse(data) //it will convert the string back to an array using JSON.parse method"
//     }
//       return [] //if there is no data in the local storage then it will return an empty array
// });
//     useEffect(()=>{
//         localStorage.setItem("key", JSON.stringify(todos))
//     }, [todos]) //it will run the useEffect function whenever the todos state changes and it will save the todos in the local storage with the key "key" and also convert the todos array into a string using JSON.stringify method because local storage can only store strings
    
//     const func1 = (e) =>{
//     console.log(e.target.value);
//     setTask(e.target.value)
// }

// const func2 = () =>{
//   if(task.trim()==''){
//     return;
//   }
//   console.log(task);
//   if(index!==null){
//     let updatedData= [...todos]  //it will create a copy of the todos array using spread operator and store it in updatedData variable
//     updatedData[index] = task  //it will update the task at the index which we want to edit with the new task which we have entered in the input field
//     setTodos(updatedData) //it will update the todos state with the updatedData array which contains the updated task
//     setIndex(null) //it will reset the index to null after updating the task
//   } else {
//     setTodos([...todos, task]) //it will add the task to the list of todos and also keep the previous todos in the list using spread operator
//   }
//   setTask('') //it will clear the input field after adding the task to the list  
// }

// function d(id){
//     console.log(id);
//     let updatedData = todos.filter((todo, index) =>{  //filter method will return a new array with all the elements that pass the test implemented by the provided function
//         return index !== id   //it will return all the todos except the one which we want to delete
//     })
//     setTodos(updatedData)
// }

// function edit(index){
//   setIndex(index) //it will set the index of the task which we want to edit
//   setTask(todos[index]) //it will set the task in the input field which we want to edit
      
        
// }
//   return (
//     <div className="container">
       
//         <h2>Todo List</h2>
//         <div className="input-box">
//         <input type = 'text' placeholder='Enter your task' name='task' value={task} onChange={func1}></input>
//         <button onClick={func2}>{index!==null?"Update" : "Add"}</button>

//         </div>

//         <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick = {() =>{edit(index)}}>
//                 Edit
//               </button>

//               <button onClick={() =>{d(index)}}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
        
//       </div>
//     </div>
//   );
// };

// //what is task here
// //ans: task is a state variable which is used to store the value of the input field and it is updated using the setTask function whenever the value of the input field changes and it is also used to add the task to the list of todos when we click on the add button and also to update the task when we click on the update button after editing the task
// export default Todo