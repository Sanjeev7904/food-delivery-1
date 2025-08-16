import React, { useContext } from 'react'
import "./card.css";
import { food_list } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from "react-router-dom";

const Card = () => {
  const{cartItems ,removeFromCart,getTotalCardAmount }=useContext(StoreContext);
  const usenavigate =useNavigate();
  return (

<div className="cart">
<div className="cart-items">
<div className='card-items-title'>
     <div className="heading">
      <p>items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>

      </div> 
      
      
      
       
       {food_list.map((item, index)=>{
        if(cartItems[item._id]>0){

         return(
          <div className="cart_items">
           
           

 
          <img src={item.image} alt="" style={{height:"70px" ,width:"70px"}}/>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{cartItems[item._id]}</p>
           <p>{item.price*cartItems[item._id]}</p>
           <p onClick={()=>{removeFromCart(item._id)}}>x</p>
         </div>
    )
}}
)}
</div>
 </div>
     
     <div className='sec'>
       <div className="cart_total">
     <h1>Cart Totals</h1>
     <div className="sub" style={{display:"flex", gap:"50%", marginTop:"15px"}}>
      <p>Subtotal</p>
      {<p>{getTotalCardAmount()}</p> }
     </div>
     
     <div className="fee"style={{display:"flex", gap:"50%", marginTop:"15px"}}>
      <p>Delivery Fees</p>
       <p>{2}</p> 
     </div>
     
     <div className="total"style={{display:"flex", gap:"50%",marginTop:"15px",marginBottom:"15px"}}>
      <p>Total</p>
      <p style={{marginLeft:"18px"}}>{getTotalCardAmount()+2}</p>
     </div>
     <button className='bt' onClick={()=>usenavigate("/placeholder")}>PROCEED TO CHECKOUT</button>

     </div>
     <div className='promo'>

      <p style={{width:"200%"}}>if you have a promo code.Enter it here</p>
       
       <div className="mmm">
  <input className="promo-input" type="text" placeholder="promo code" />
  <button className="bt1">Submit</button>
</div>

       
       

     </div>
      
      
       
       
       
     </div>

     </div>
     
     




    
    
  )
}

export default Card;
