import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';



const Nav1 = () => {
  return (


<section>
  
  <div class="navbar_01">

    <div class="pri_navbar_left">

  <div class="dropdown_01">
      <button class="dropbtn">India 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content_01">
        <a href="#">Afganistan</a>
        <a href="#">Uk</a>
        <a href="#">Shri Lanka</a>
        <a href="#">Pakistan</a>
          <a href="#">Brazil</a>
          <a href="#">America</a>
            <a href="#">South Africa</a>
            <a href="#">West Indies</a>
              <a href="#">UK</a>
              <a href="#">Bangladesh</a>
      </div>
    </div> 
    
      <div class="dropdown_01">
      <button class="dropbtn">Language 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content_01">
        <a href="#">English</a>
        <a href="#">Hindi</a>
        <a href="#">Arabic</a>
        <a href="#">German</a>
          <a href="#">Greek</a>
          <a href="#">Spanish</a>
            
      </div>
    </div> 
    
    
    
      <div class="dropdown_01">
      <button class="dropbtn">Currency 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content_01">
        <a href="#">USD</a>
        <a href="#">EUR</a>
        <a href="#">INR</a>
        <a href="#">GBP</a>
          
          
    
            
      </div>
    </div> 

    </div>
    
    <div class="pri_navbar_right">
      <a href="#register">Register</a>
    <a href="#login">Login</a>
    
    <a href="my_dashboard">My Dashboard</a>
    <a href="employer"> For Employer</a>
    </div>
    
  </div>
</section>

)
}

export default Nav1;