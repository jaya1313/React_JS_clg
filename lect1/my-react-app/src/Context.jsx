// import {createContext} from 'react'  //it is used to create context and it is used in main.jsx file

// let Context = createContext() //it will create a context and it will return an object with two properties Provider and Consumer and we can use these properties to share data between components

// export default Context //it will export the context so that we can use it in other files like home.jsx and main.jsx

//lect 14
// useContext -> it is used to share data between components without passing props through every level of the component tree
//todo list using useContext

// we have created a context in Context.jsx file and we have used that context in Todo.jsx file to share the state and dispatch function between the components without passing props through every level of the component tree and we have also used that context in App.jsx file to wrap the Todo component with the context provider so that we can access the state and dispatch function in the Todo component and also in other components if we want to use it in future.

import React,{ createContext, useReducer } from "react";
export const storeContext = createContext();
const initialState = {
    input:"",
    todos:[]
};

function reducer(store, action) { 
    console.log(action, 'acc');

    console.log(store.todos)
    if(action.type == 'Set_inp'){
        return{
            ...store,
            input:action.payload
        }
    }
    else if(action.type=='Add_task'){
        return{
            ...store,
            todos:[...store.todos,store.input]
        }
    }
}

const Context = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

 export default Context