import React, { useContext } from 'react'
import "./Placeholder.css";
import { StoreContext } from '../../context/StoreContext';

const Placeholder = () => {
  const{getTotalCardAmount}=useContext(StoreContext);
  return (
    
    <form className='place-order'>
     <div className="place-order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First name' />
        <input type="text" Placeholder="Last name" />
      </div>
      <input type="email" placeholder='Email address' />
      <input type="text" placeholder='Street'/>
      
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" Placeholder="State" />
      </div>

      <div className="multi-fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" Placeholder="Country" />
      </div>
       <input type="text" placeholder='Phone'/>
     </div>
     <div className="place-order-right">
      <div className="cart_total">
     <h1>Cart Totals</h1>
      <div className="Subtotal">
       <p>Subtotal</p>
       <p>${getTotalCardAmount()}</p>
      </div>
  
     
     <div className="Delivery">
    <p>Delivery Fee</p>
    <p>${getTotalCardAmount()=== 0 ? 0: 2 }</p>
  </div>
  

     <div className="Total">
      <p>Total</p>
      <p>${getTotalCardAmount()===0?0:getTotalCardAmount()+2}</p>
     </div>
     
     <button className='bt'>PROCEED To PAYMENT</button>

     </div>
     </div>

    </form>

  )
}

export default Placeholder;
