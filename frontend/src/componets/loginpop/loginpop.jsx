import React, { useState } from 'react'
import "./loginpop.css"
import { assets } from '../../assets/frontend_assets/assets';

const Loginpop = ({setShowlogin}) => {
    const[currState , setcurrState] =useState("sign-up");
  return (
    <div className='login-pop' style={currState === "sign-up" ? { height: "55%" } : { height: "45%" }}
>
      <form >
       <div className='login-pop-header'>
       <h2>{currState}</h2>
       <img style={{ cursor:'pointer', height:'20px' , width:'20px'}} onClick={()=>{setShowlogin(false)} }  src={assets.cross_icon} alt="" />

       </div>

       <div className="login-popup-inputs">
        {currState === 'Login'? <></> :<input type="text" placeholder='your name'required/>}
         <input type="email" placeholder='your email'required/>
         <input type="password" placeholder='your password'required/>
       </div>
       <button className='but' >{currState==="sign-up" ?"Create account" :"Login"}</button>
         <div className="login-popup-condition">

            <input type="checkbox" required style={{marginBottom:"20px"}}/>
            <p>By continuing, i agreee to the terms of use & privacy policy</p>
         </div>
         {currState ==='Login'
         ? <p style={{marginLeft:"30px", marginTop:"18px"}}>Create a new account ? <span style={{color:'blue', cursor:'pointer', fontWeight:"300"}} onClick={()=>setcurrState("sign-up")}>Sign-up</span></p> :<p style={{marginLeft:"30px", marginTop:"18px"}}>
            Already have an account? <span style={{color:'blue', cursor:'pointer', fontWeight:"300"}} onClick={()=>{setcurrState("Login")}}>Login here</span></p>}

      </form>
    </div>
  )
}

export default Loginpop
