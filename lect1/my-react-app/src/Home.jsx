import React from 'react'
// import A from './A'

// const Home = ({data}) => {
//   return (<>
//     <div>Home</div>
//     <h2>Hello</h2>
//     <A name={data}/>
//     </>
//   )
// }

// //new function                  //components
// const New = () =>{
//     return (<>
//         <div>New fileeeee</div>
//         </>
//     )
// }

// const Component = ()=>{
//     return (
//         <p>this a component ,we have to expoert from here and import to app.jsx</p>
//     )
// }

// const hello = () =>{
//       return (
//         <A/>
//       )
// }

// export{Component}
// export {New}

// const Home = () => {
//   console.log("homee");

//   return (
//     <div>
//      Home
//     </div>
//   )
// }

// lect 10
import { useContext} from 'react'
import Context from './Context'

const Home = () => {
let data = useContext(Context) //  it is used to get the value from context provider(from context file) and it is used in functional component only
console.log(data);

  return (
    <div>{data}</div>  //it will print om in screen because we have given value as om in context provider in main.jsx
  )
}


export default Home