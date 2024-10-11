import React from 'react'
import RestaurantCard from './RestaurantCard'

const TopRestaurantList = ({TopRestaurant}) => {
  return (
            <div className="top-restaurant-container">
            <div className="top-restaurant-carousel">
            <h2>{TopRestaurant.header.title}</h2>
            <div className="redirect-buttons">
                    <button onClick={()=>{
                        
                    }}>{" < "}</button>
                    <button onClick={()=>{

                    }}>{" > "}</button>
                    </div>
            </div>
            <div className='toprest-container'>
                { TopRestaurant.gridElements.infoWithStyle.restaurants.map((restaurant)=>{
                    return  <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
                    })}
            </div>
        </div>
  )
}

export default TopRestaurantList