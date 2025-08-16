import React, { useContext } from 'react'
import "./fooddisplay.css"
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../fooditem/fooditem'
const Fooddisplay = ({count}) => {
  const {food_list}=useContext(StoreContext);

  return (
    <>
    <div className="food-display">
      <h2 style={{marginLeft:"140px"}}>Top dishes near you</h2> 
        <div className="food-display-list auto1">
         {food_list.map((item , index)=>{
             if(count==="all" || count=== item.category){
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
}})}


        </div>

    </div>  

    </>
  )
}

export default Fooddisplay;
