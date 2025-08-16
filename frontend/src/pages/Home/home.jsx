import React, { useState } from 'react'
import "./home.css";
import Header from '../../componets/Navbar/header/header';
import Explormeanu from '../../componets/Navbar/expoloermeanu/explormeanu';
import Fooddisplay from '../../componets/Fooddisplay/fooddisplay';
import Footer from '../../componets/Footer/Footer';
import Appdownload from '../../componets/Appdownloads/Appdownload';
const Home = () => {
  const[count , setCount]= useState("all");
  return (
    <div className='aa'>
       <Header/>
       <Explormeanu count={count} setCount={setCount} />
       <Fooddisplay count={count}/>
       <Appdownload/>
       
      
       
       
      
    
    </div>
  )
}

export default Home
