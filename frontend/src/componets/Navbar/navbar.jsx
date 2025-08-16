import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./navbar.css";
import { Link } from 'react-router-dom';
import Loginpop from '../loginpop/loginpop';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {

  const[meanu , setMeanu]=useState("Home");
  const[showlogin , setShowlogin]=useState(false);
  const{getTotalCardAmount}=useContext(StoreContext);
  return (
    <>

S
<div className='navbar'>

   
      
    <Link to="/"><img src={assets.logo}  alt="img not found" /></Link> 
    
       <ul className="navbar-meanu">
        
        
         <Link to="/" onClick={()=>{setMeanu("Home")}} className={meanu=="Home" ?"active" :""}>Home</Link>
         <a  href="#explore-meanu" onClick={()=>{setMeanu("meanu")}} className={meanu=="meanu" ?"active" :""}>meanu</a>
         <a href='#mobile' onClick={()=>{setMeanu("mobile-app")}}className={meanu=="mobile-app" ?"active" :""}>mobile-app </a>
         <a  href="#meanu11" onClick={()=>{setMeanu("contect-app")}} className={meanu=="contect-app" ?"active" :""}>contect-us</a>
      </ul>
       <div className="right-navbar">
         <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
         <Link to="/card"><img src={assets.basket_icon} alt="" /></Link> 
         
          <div className={getTotalCardAmount()===0?"":"dot"}></div>
          </div>
         
         
         
         <button onClick={()=>{setShowlogin(true)}} className='singnin'>sign in</button>


       </div>
       {showlogin && <Loginpop setShowlogin={setShowlogin}/>}

    </div>
    </>
    
    
  )
}

export default Navbar
