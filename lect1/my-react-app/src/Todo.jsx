import React from 'react'
import './Todo.css'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'


const Todo = () => {
    let [task, setTask] = useState('');
    let [todos, setTodos] = useState(() =>{
        let data = localStorage.getItem("key") //it will get the data from the local storage with the key "key
         if(data){
         return JSON.parse(data) //it will convert the string back to an array using JSON.parse method"
    }
      return [] //if there is no data in the local storage then it will return an empty array
});
    useEffect(()=>{
        localStorage.setItem("key", JSON.stringify(todos))
    }, [todos]) //it will run the useEffect function whenever the todos state changes and it will save the todos in the local storage with the key "key" and also convert the todos array into a string using JSON.stringify method because local storage can only store strings
    
    const func1 = (e) =>{
    console.log(e.target.value);
    setTask(e.target.value)
}

const func2 = () =>{
    setTodos([...todos, task]) //it will add the task to the list of todos and also keep the previous todos in the list using spread operator
    setTask('') //it will clear the input field after adding the task to the list
}

function d(id){
    console.log(id);
    let updatedData = todos.filter((todo, index) =>{  //filter method will return a new array with all the elements that pass the test implemented by the provided function
        return index !== id   //it will return all the todos except the one which we want to delete
    })
    setTodos(updatedData)
}

function edit(id){
      
        let newTask = prompt("Enter the new task") //it will show a prompt to enter the new task
        let updatedData = todos.map((todo, index) =>{ //map method will return a new array with the results of calling a provided function on every element in the calling array 
        if(index === id){
            return newTask //it will return the new task if the index of the todo is equal to the id of the todo which we want to edit
        }
        return todo; //it will return the original todo if the index does not match
    });
    setTodos(updatedData);
}
  return (
    <div className="container">
       
        <h2>Todo List</h2>
        <div className="input-box">
        <input type = 'text' placeholder='Enter your task' name='task' value={task} onChange={func1}></input>
        <button onClick={func2}> Add</button>

        </div>

        <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>

            <div className="actions">
              <button onClick = {() =>{edit(index)}}>
                Edit
              </button>

              <button onClick={() =>{d(index)}}>
                Delete
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};
export default Todo