import React from 'react'
import RestaurantCard from './RestaurantCard';

const RestaurantContainer = ({ResList}) => {
    console.log(ResList,"from Restaurant Container")
  return (
    <div className='res-container'>
    { ResList.map((restaurant)=>(
     <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
     ))}
         
     </div>
  )
}

export default RestaurantContainer