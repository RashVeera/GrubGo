import restaurant_list from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    return (
        <>
        <div className='body-container'>
            <div className='search-container'>
            <input type='search'/>
            </div>
            <div className='res-container'>
           { restaurant_list.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
            ))}
                
            </div>

        </div>
        </>
    )
}

export default Body;