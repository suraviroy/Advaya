import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs';
import React from 'react';
import './footer3.css'


export default function Footer3() {
  
  return (
    <div className='footerr' >
      <div className='f1 footeri'>
      <BsFacebook/>
      </div>
      <div className='f2 footeri'>
      <BsTwitter/>
      </div>
      <div className='f3 footeri'>
      <BsInstagram/>
      </div>
      <div className='f4 footeri'>
      <BsLinkedin/>

      </div>
    </div>

  );
}