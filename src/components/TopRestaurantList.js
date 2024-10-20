import React from 'react'
import TopRestaurantCarousel from './TopRestaurantsCarousel'
import { Link } from 'react-router-dom'

const TopRestaurantList = ({TopRestaurant}) => {
  return (
            <div className="ml-40 my-3 w-5/6">
            <div className="">
            <h2 className='font-bold text-lg overflow-ellipsis'>{TopRestaurant.header.title}</h2>
            {/* <div className="redirect-buttons">
                    <button onClick={()=>{
                        
                    }}>{" < "}</button>
                    <button onClick={()=>{

                    }}>{" > "}</button>
                    </div> */}
            </div>
            <div className=' mt-6 flex flex-shrink-0 overflow-x-scroll gap-2 overflow-y-hidden'>
                { TopRestaurant.gridElements.infoWithStyle.restaurants.map((restaurant)=>{
                    return   <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><TopRestaurantCarousel key={restaurant.info.id} restaurantData={restaurant} /></Link>
                    })}
            </div>
        </div>
  )
}

export default TopRestaurantList