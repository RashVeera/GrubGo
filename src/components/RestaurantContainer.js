import React from 'react'
import RestaurantCard,{WithOfferDetails} from './RestaurantCard';
import { Link } from 'react-router-dom';


const RestaurantContainer = ({ResList}) => {
    // console.log(ResList,"from Restaurant Container")
    const RestaurantCardwithOffer=WithOfferDetails(RestaurantCard)

  return (
    <div className=' flex flex-wrap gap-5 mt-5 py-6  ml-40 w-5/6'>
    { ResList.map((restaurant)=>(
     <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
      {restaurant?.info?.aggregatedDiscountInfoV3 ?( <RestaurantCardwithOffer restaurantData={restaurant} />):
      (<RestaurantCard restaurantData={restaurant} />)
      }</Link>
     ))}
         
     </div>
  )
}

export default RestaurantContainer