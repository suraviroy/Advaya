import React from "react";
import Navbare from './pages/navbar';
import Header from "./pages/header";
import Booking from './pages/booking';
import Footer2 from './pages/footer2';
import Footer1 from './pages/footer1';
import Footer3 from './pages/footer3';
import './homepage.css';

function Homepage() {
    return (
        <div className="hh1">
         <div><Navbare /></div>
         <div className="hh3">   <Header /></div> 
         <div className="hh331">  <Booking /></div> 
         <div className="hh332">   <Footer1 /></div>  
         <div className="hh333">   <Footer2 /></div> 
          <div className="hh334">  <Footer3 /></div> 
        </div>
        

    );
}
export default Homepage;