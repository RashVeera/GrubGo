import React from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';

const RestaurantContainer = ({ResList}) => {
    // console.log(ResList,"from Restaurant Container")
  return (
    <div className='res-container'>
    { ResList.map((restaurant)=>(
     <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard restaurantData={restaurant} /></Link>
     ))}
         
     </div>
  )
}

export default RestaurantContainer