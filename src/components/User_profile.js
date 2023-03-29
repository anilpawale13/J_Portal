import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import img1 from "../images/user.png";
const Profile_pages = () => {

    return (
        <div class="back">

            <section>

                <div id="pricing-table">


                    <div class="priheading">


                        <nav id="one" class="henavbar navbar-expand-sm" >

                            <ol>
                                <h1 id="h1">User Profile</h1>
                            </ol>
                            <ul class="navbar-nav" id="navh">

                                <li class="nav-item-hp">
                                    <a class="nav-link " href="#">Home / </a>
                                </li>
                                <li class="nav-item-hp">
                                    <a class="nav-link" href="#">Pages / </a>
                                </li>
                                <li class="nav-item-hp">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </section>





            <section>

                <div className="container emp-profile">
                    <form method="">

                        <div className="row">

                            <div className="col-md-4" id="user_img">
                                   
                            <div className="profile-img">
                            <img src={img1} alt="user_profile" />
                            </div>
                                
                            </div>

                            <div className="" id="user_name">
                                <div className="profile-head">
                                    <h5>Anil Pawale</h5>
                                    <h6><b>Member Since</b>: November 2018</h6>
                                    <p className="profile-rating mt-2 ">


                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span> <h7>5 (3876 Reviews)</h7></p>

                                    <div className="social-media mb-4">
                                    
                                    
                                    <span><a id="fac_icon" href="https://www.facebook.com/"><span class="fa-brands fa-facebook"></span></a></span>
                                    <span><a id="twit_icon" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><span class="fa-brands fa-twitter"></span></a></span>
                                    <span><a id="you_icon" href="https://www.youtube.com/"><span class="fa-brands fa-youtube"></span></a></span>
                                    <span><a id="insta_icon" href="https://www.instagram.com/accounts/login/"><span class="fa-brands fa-instagram"></span></a></span>

                                  
                                    </div>

                                   
                                 </div>
                            </div>
                            
                         


                        </div>

                        <div className="row">
                        {/* left side*/}
                         
                        <div className="col-md-12 user-profile">
                        <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="myjob-tab" data-toggle="tab" href="#myjob" role="tab">My job</a>


                        </li>

                    </ul>
                        <div className="user-profile-work">
                        <h4 id="heead_user">Personal Details</h4>
                        <div className="tab-content profile-tab" id="profileContent">

                          {/*_____________________1)user profile start _________________________*/ }
                        
                        <div className="tab-pane fade show active" id="profile" role={"tabpanel"} aria-labelledby="profile-tab">
                        
                       <div className="float_left">

                        <div className="row">
                            <div className="col-md-4">
                               <label>Full Name:</label>
                            </div>

                           <div className="col-5">
                          <p>Rubin Carmody</p>
                           </div>  
                        </div>


                        <div className="row">
                        <div className="col-md-3">
                           <label>Languages:</label>
                        </div>

                       <div className="col-md-7">
                      <p>English,German,Vehiclenish.</p>
                       </div>  
                    </div>

                    <div className="row">
                    <div className="col-md-2 ">
                    <label>Email:</label>
                    </div>

                   <div className="col-md-4">
                  <p>georgemestayer@Carlist.com</p>
                   </div>  

                </div>

                    
                </div> 

                <div className="right col-md-6">

                <div className="row pb-12 ">
                <div className="col-md-8">
                   <label>Location:</label>
                </div>

               <div className="col-md-1">
              <p>USA</p>
               </div>  
            </div>
            <div className="row pb-12">
            <div className="col-md-8">
               <label>Website:</label>
            </div>

           <div className="col-md-3">
          <p>Carlist.com</p>
           </div>  
        </div>

        <div className="row pb-12">
        <div className="col-md-7">
           <label>Phone:</label>
        </div>

       <div className="col-md-5">
      <p>+125 254 3562</p>
       </div>  
    </div>

            </div>


            <div className="row pb-1">
            <div className="col-md-1">
               <label>Biography</label>
            </div>
    
           <div className="col-md-12">
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences that are extremely

          because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences the extre painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
           </div>  
        </div>

                        </div>

                        {/*_____________________1)user profile end _________________________*/ }



        {/*_____________________2) my jobs start_________________________*/ }
                        <div className="tab-pane fade show " id="myjob" role={"tabpanel"} aria-labelledby="myjob-tab">


                        <div className="row">
                        <div className="col-md-6">
                           <label>Languages</label>
                        </div>

                       <div className="col-md-6">
                      <p>jlkjlkjlkj</p>
                       </div>  
                    </div>
                        
                    </div>
                    {/*_____________________2) my jobs end_________________________*/ }
                        </div>
                       
                            
                        </div>

                        </div>
                        
                        {/* Right side*/}
                            
                        </div>

                    </form>

                </div>


            </section>

        </div>
    )
}

export default Profile_pages