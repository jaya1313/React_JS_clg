import React from 'react'

const Home = () => {
  return (<>
    <div>Home</div>
    <h2>Hello</h2>
    </>
  )
}

//new function                  //components
const New = ({data}) =>{
    console.log(data)
    return (<>
        <div>New fileeeee</div>
        </>
    )
}

const Component = ()=>{
    return (
        <p>this a component ,we have to expoert from here and import to app.jsx</p>
    )
}



export{Component}
export {New}
export default Home