import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return ( 
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link to = "/" className="nav-link" >Home</Link>
    </li>
    <li className="nav-item">
      <Link to = "/" className="nav-link">About</Link>
    </li>
    <li className="nav-item">
      <Link to = "/register" className="nav-link">Register</Link>
    </li>
    <li className="nav-item">
      <Link to = "/login" className="nav-link ">Login</Link>
    </li>
  </ul>
</nav>
   );
}
 
export default Navbar;