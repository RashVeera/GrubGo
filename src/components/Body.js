import { useEffect, useState } from "react";
import restaurant_list from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Loading from "./Loading";

const Body=()=>{
    const [ResList,SetResList]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const api = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035713261544618&lng=80.19712787121533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data= await api.json();
        // SetResList(data);
        const restaurant_data=data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        // console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        SetResList(restaurant_data);
    }

    if(ResList?.length===0){
        return <Loading/>
    }

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