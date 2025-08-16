import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./Appdownloads.css"



const Appdownload = () => {
  return (
    <div className='download' id="mobile">
      <div>
      <h1 style={{textAlign:'center' ,fontWeight :"600"}}>For Better Experience Download</h1>
       <h1 style={{textAlign:'center', marginTop:"10px", fontWeight :"600"}}>Tomato</h1>

       <div className='appd'>
        <img className='ab01' src={assets.play_store}alt="" />
        <img className='ab01' src={assets.app_store} alt="" />
       </div>

      </div>
    </div>
  )
}

export default Appdownload
