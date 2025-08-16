import React, { useContext, useState } from 'react'
import "./fooditem.css";
import { assets } from '../../assets/frontend_assets/assets';
 import{ StoreContext } from '../../context/StoreContext';

const Fooditem = ({id,name,price,description,image}) => {
   const[itemcount , setItemcount]= useState(0);
   const{cartItems, addToCart, removeFromCart}=useContext(StoreContext);
  return (
   
    <>
    
   <div className='maindev'>
      <div className='ab'>
        <img className="img1" src={image} alt="" />
        {
         (!cartItems[id]) ? <img id="in" onClick={ ()=> addToCart(id)}  src= {assets.add_icon_white}alt="" />: 
         <div className='add-item'>
          <img  onClick={ ()=> addToCart(id)} src={assets.add_icon_green} alt="" />
           <p style={{marginTop:"10px"}}>{cartItems[id]}</p>
           
          <img  onClick={ ()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          
         </div>
        }
        </div>
        <div className="contants1">
          <div className='rating'>
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="" />
          </div>
          <div className='price'>
          <p>{description}</p>
          <h3 style={{color:"orange", fontSize:30 }}> ${price}</h3>
          </div>
        </div>
      
      
    </div>
    
    
    
    </>
  )
}

export default Fooditem;
