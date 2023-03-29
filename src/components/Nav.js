import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
<div>

<section>
    <nav class="navbar navbar-expand-sm  justify-content-center ">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item dropdown">

        <Link class="nav-link dropdown-toggle" id="dropdown" to="/pages" role="button" data-bs-toggle="dropdown">Pages</Link>
        <ul class="dropdown-menu">
          <li><Link class="dropdown-item" to="/profile_page">Profile Page</Link></li>
          <li><Link class="dropdown-item" to="/user_profile">User Profile</Link></li>
          <li><Link class="dropdown-item" to="/user_list">User List</Link></li>
        
        </ul>
        </li>
         <li class="nav-item">
        <Link class="nav-link" to="/blog">Blog</Link>
      </li>
       <li class="nav-item">
        <Link class="nav-link" to="/my_dashboard">My Dashboard</Link>
      </li>
       <li class="nav-item">
        <Link class="nav-link" to="/contact_us">Contact Us</Link>
      </li>
      
    
      
       <li class="nav-item ">
       <button type="button" class="btn btn-danger"><Link class="nav-link " id="submit" to="/submit">Submit a Job</Link></button>
 
       {/*<Link class="nav-link " id="submit" to="/submit">Submit a Job</Link>*/}
 
       </li>

        <li class="nav-item ">
        <button type="button" class="btn btn-info"> <Link class="nav-link" id="request" to="/create_resume">Create Resume</Link></button>
        
        </li>
    </ul>
  </nav>
  </section>
  </div>
  
  )
}

export default Nav;