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
// import { useContext} from 'react'
// import Context from './Context'

// const Home = () => {
// let data = useContext(Context) //  it is used to get the value from context provider(from context file) and it is used in functional component only
// console.log(data);

//   return (
//     <div>{data}</div>  //it will print om in screen because we have given value as om in context provider in main.jsx
//   )
// }


// export default Home

// import { useEffect, useState } from 'react'
// import './App.css'
// const Home = ({apiData,SetApiData,cart,SetCart}) => {

//   console.log(cart,"carttttt");
  
     

    
//   useEffect(()=>{
//    async function apiCall(){

//   let res=   await   fetch("https://dummyjson.com/products")
//        let data=       await res.json()
//        console.log(data);
//        SetApiData(data.products)
       

//     }
//     apiCall()

//   },[])

//   return (
//     <div id='card'>
//       {
//         apiData.map((a)=>{
//           return(<div id='main_card'>
//           <img   src={a.thumbnail}/>
//           {/* <h4>{a.title}</h4>
//           <h6>{a.price}</h6> */}
//           <button onClick={()=>SetCart([...cart,a])}>add</button>
//           </div>)
//         })
//       }
//     </div>
//   )
// }

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home