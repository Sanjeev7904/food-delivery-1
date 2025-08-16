
import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='mainfooter' id="meanu11">
    <div className='footer-1'> 
      <div className='left'>
        <img src={assets.logo} alt="Logo" />
        <p style={{marginTop:"20px", width:"65vh"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint tempore, rem illum, est quod ipsa aliquid asperiores reiciendis, quam voluptatum accusamus id ut impedit accusantium minus tempora facere earum.</p>
     
        <div className='icon1'>
          
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="30"  />
         <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="30" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="30" />

        </div>
      </div>

      <div className='center-footer'>
        <h1>COMPANY</h1>
        <ul className='list'>
          <li style={{marginTop:"20px"}}>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      
      <div className='right-footer'>
        <h1>GET IN TOUCH</h1>
        <p style={{marginTop:"20px"}}>+1-212-456-7890</p>
        <p style={{marginTop:"8px"}}>contact@tomato.com</p>
      </div>
  </div>
    
        <hr />
         <div className='ccc'>© 2024 Tomato.com. All Rights Reserved.</div>

    </div>
    
    
    
       
     </>
       
  )
}

export default Footer
