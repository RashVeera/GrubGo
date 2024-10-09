import { useState } from "react";
import restaurant_list from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    const [ResList,SetResList]=useState(restaurant_list);
    return (
        <>
        <div className='body-container'>
            <div className='search-container'>
            {/* <input type='search'/> */}
            <button className="button-top" onClick={()=>
                {const filteredList=ResList.filter((rescards)=>rescards.info.avgRating >4 )
                    SetResList(filteredList)
                }

            }>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
           { ResList.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
            ))}
                
            </div>

        </div>
        </>
    )
}

export default Body;