import styles from "./styles.module.css";
import React from "react";
import Navbarregister from '../navbarregister.js';
import Footer2 from '../footer2';
import Footer1 from '../footer1';
import Footer3 from '../footer3';

import Header from '../header';
import Booking from '../booking';


function Home(userDetails) {
    const user = userDetails.user;
    const logout = () => {
        window.open(`http://localhost:8080/auth/logout`, "_self");
    };
    return (
        <div className={styles.container1001}>
            <div className="hh1">
                <div className="hh3"> <Navbarregister username={user.name} pic={user.picture} /></div>
                
                <div className="hh3">   <Header /></div>
                <div className="hh331">  <Booking /></div>
                <div className="hh33">   <Footer1 /></div>
                <div className="hh33">   <Footer2 /></div>
                <div className="hh3">  <Footer3 /></div>
            </div>
           
        </div>
			
	);
}

export default Home;