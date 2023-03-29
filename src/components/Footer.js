import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Footer =()=>{

    return(
<div>

<div class="topnav_a">
<div class="active_a">
<b>Subscribe To Our Onlinesletter</b>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></div>
<div class="search-container">
  <form action="/action_page.php">
   <input type="text" placeholder="Enter your Email" name="search"/>
    <button type="submit">Subscribe </button>
  </form>
</div>
</div>



<div class="pg-footer">
    <footer class="footer">
    
      <div class="footer-content">
        <div class="footer-content-column">
         
          <div class="footer-menu" id="jobcat">
            <h2 class="footer-menu-name">JOB CATEGORIES</h2>
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Developement</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Designing</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Marketing</a>
              </li>

              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Others</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu" id="jobt">
            <h2 class="footer-menu-name">JOB TYPE</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Work from home</a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">Internship</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Part time</a>
              </li>

              <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="#">Full time</a>
            </li>
            </ul>
          </div>
      
        </div>
        
        <div class="footer-content-column">
          <div class="footer-menu" id="resources">
            <h2 class="footer-menu-name">RESOURCES</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Support</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">FAQs</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Terms of Service</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Contact Details</a>
              </li>
             
            </ul>
          </div>
        </div>
    

  
   <div class="footer-content-column">
          <div class="footer-menu" id="popular">
            <h2 class="footer-menu-name">POPULAR ADS</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Educational college Ads</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Free Lancer for Web Developer</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Searching for Developer</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">BPO Online In Bangalore</a>
              </li>
             
            </ul>
          </div>
          
        </div>
  
        <div class="footer-container">
        <form action="/">
         <input type="text" placeholder="Email" name="search"/>
          <button type="submit" class="fbutton">Subscribe </button>
        </form>
    </div>
          
        </div>
        <hr>
        </hr>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text-p">Copyright © 2019  rejoin. Designed by
            <a class="footer-copyright-link" href="#" target="_self">Spruko</a>
             All rights reserved.
          </p>
        </div>
        
        
        <hr>
        </hr>
        
            <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link-l" href="#" target="_self">How it Works | About Us | Pricing | Ads Categories | Privacy Policy | Terms of Conditions | Blog | Contact Us | Pre</a>
          </p>
        </div>
      </div>
      </div>
    </footer>
  </div>
</div>
  )
}

export default Footer