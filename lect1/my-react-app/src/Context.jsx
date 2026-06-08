import {createContext} from 'react'  //it is used to create context and it is used in main.jsx file

let Context = createContext() //it will create a context and it will return an object with two properties Provider and Consumer and we can use these properties to share data between components

export default Context //it will export the context so that we can use it in other files like home.jsx and main.jsx