import React from 'react'
import "./expoloermeanu.css"
import { menu_list } from '../../../assets/frontend_assets/assets';

const Explormeanu = ({count , setCount}) => {
  return (
    <div className="main-meanu help" id="explore-meanu">
        <h1 className='h1tag'>Explore our meanu</h1>
        <p className='ptag'>Choose from a diverse meanu featuring a detectable array of dishes. Our missions is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
        
        <div className='small-meanu'>
        {menu_list.map((m , index)=>{
        return(
          <div onClick= {()=>{setCount((prev)=>(prev===m.menu_name?"all": m.menu_name))}} key={index} className='little-meanu'>
           <img  className ={count === m.menu_name ? "active1" : ""}src={m.menu_image} alt="" />
           <p>{m.menu_name}</p>
         </div>
            )
             })}
         </div>
         <hr />
     </div>
  )
}

export default Explormeanu;
