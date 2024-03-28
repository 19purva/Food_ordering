import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => { // Destructuring props here

    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-tittle">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
              {currState==="Login" ? <></> :  <input type="text" placeholder='Your name' required/>}
             
              <input type="email"  placeholder='Your email' required/>
              <input type="password" placeholder='Password' required />
            </div>
            <button>{ currState==="sign up" ? "Createaccount" : 
                       "Login"
            }</button>

            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By Continuing,I Agree to the terms of use & privacy policy </p>
            </div>
            {currState=== "Login" ?  <p>Create a New Account <span onClick={()=>setCurrState("sign up")}>Click Here</span></p> 
            :  <p>Already have an Account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>  }
          
           
            </form>
        </div>
            
           
    );
};

export default LoginPopup;
