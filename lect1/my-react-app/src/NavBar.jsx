// import React from 'react'
// import {Link} from "react-router-dom"

// const NavBar = () => {
//   return (
//     <div>
//         <div id='nav'>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/task">Task</Link>
//     </div>
//     </div>
//   )
// }

// export default NavBar

// import React from 'react'
// import './App.css'
// import { Link } from 'react-router-dom'
// // npm i react-router-dom
// const NavBar = () => {
//   return (
//     <div>
//         <nav>
//             <Link to={"/"}>   
//             <li>Home</li>
//             </Link>
//             <Link to={'/about'}>  
//             <li>About</li>
//             </Link>
//             <Link   to={"/cart"}>  
//             <li>Cart</li>
//             </Link>

//         </nav>
//     </div>
//   )
// }

// export default NavBar


import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container'> 
      {/* NavBar */}
      <navbar>
        <Link to={'/'}>
        <h3>Home</h3>
        </Link>
        <Link to={'/about'}>
        <h3>About</h3>
        </Link>
        <Link to={'/task'}>
        <h3>Task</h3>
        </Link>
      </navbar>
    </div>
  )
}

export default NavBar