import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Loading from "./Loading";
import CarouselDaily from "./CarouselDaily";
import CarouselContainer from "./CarouselContainer";
import TopRestaurantList from "./TopRestaurantList";
import LineBreaks from "./LineBreaks";
import RestaurantContainer from "./RestaurantContainer";

const Body=()=>{
    const [ResList,SetResList]=useState([]);
    const [OriginalRestaurantList,setOriginalRestaurantList]=useState([]);
    const [CarouselTop,setCarouselTop]=useState("");
    const [searchText,setsearchText]=useState("");
    const[TopRestaurant,setTopRestaurant]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

  

    const fetchData = async () =>{
        const api = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035713261544618&lng=80.19712787121533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data= await api.json();
        const carouselHeader=data.data.cards[0].card.card;
        const restaurant_data=data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const TopRestaurant_elem=data.data.cards[1].card.card;

        setTopRestaurant(TopRestaurant_elem)
        SetResList(restaurant_data);
        setCarouselTop(carouselHeader);
        setOriginalRestaurantList(restaurant_data);
    }

    
    return ResList.length===0  ?  (<Loading/> ) :  (
        <>
        <div className=''>
            <div className='flex gap-3 m-3 justify-center'>
            <input type='search' className="border border-black border-solid rounded-md px-1" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/>
            <button className=" px-4 py-1 border border-solid border-orange-800 bg-orange-500 text-white rounded-sm mr-10" onClick={()=>{
                {
                    const filteredList=OriginalRestaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    SetResList(filteredList);
                }
            }}>Search</button>
            <button className=" px-4 py-1 border border-solid border-orange-800 bg-orange-500 text-white rounded-sm" onClick={()=>
                {const filteredList=OriginalRestaurantList.filter((rescards)=>rescards.info.avgRating >4.1 )
                    SetResList(filteredList)
                }

            }>{"Top Rated Restaurants >>"}</button>
            </div>
            <div>
            <CarouselContainer  CarouselTopprops={CarouselTop} />
            </div>
            <LineBreaks/>
            <div>
            <TopRestaurantList className="" TopRestaurant={TopRestaurant}/>
            </div>
            <LineBreaks/>
            <RestaurantContainer ResList={ResList}/>

        </div>
        </>
    )
}

export default Body;