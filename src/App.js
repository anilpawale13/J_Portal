import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav1 from "./components/Nav1";
import Nav from "./components/Nav";
import Profile_page from "./components/Profile_page";
import User_profile from "./components/User_profile";
import Footer from "./components/Footer";


import {BrowserRouter,Routes,Route} from "react-router-dom";




 function App (){
  return(
    <div className="App">

    <Nav1 />
    <Nav />
    <Routes>
   <Route path="/" element={
    <h1>
    <button className="btn btn-success">Find The Best Job For Your Future</button> </h1>  }/>
    
   <Route path="/about" element={<h1>about list</h1>}/>
   <Route path="/pages" element={<h1>Job list</h1>}/>
   <Route path="/Profile_page" element={<Profile_page/>}/>
   <Route path="/User_profile" element={<User_profile/>}/>



  
   
   </Routes>
   <Footer />
    </div>
    );
 }
 export default App;



// import './App.css';
// import Nav from './Nav'
// import {BrowserRouter} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">

//     <BrowserRouter>
//     <Nav/>
//     <h1>jop portal</h1>
    
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
