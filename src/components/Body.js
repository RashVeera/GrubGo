import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import CarouselContainer from "./CarouselContainer";
import TopRestaurantList from "./TopRestaurantList";
import LineBreaks from "./LineBreaks";
import RestaurantContainer from "./RestaurantContainer";
import UserContext from "../utils/UserContext";
import { SWIGGY_URL } from "../utils/constants";

const Body=()=>{
    const [ResList,SetResList]=useState([]);
    const [OriginalRestaurantList,setOriginalRestaurantList]=useState([]);
    const [CarouselTop,setCarouselTop]=useState("");
    const [searchText,setsearchText]=useState("");
    const[TopRestaurant,setTopRestaurant]=useState([]);
    const {loggedInUser,setuserName}=useContext(UserContext)
    useEffect(()=>{
        fetchData();
    },[]);

  

    const fetchData = async () =>{
        const api = await fetch(SWIGGY_URL);
        console.log(api)

        const data= await api.json();
        const carouselHeader=data.data.cards[0].card.card;
        const restaurant_data=data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const TopRestaurant_elem=data.data.cards[1].card.card;

        setTopRestaurant(TopRestaurant_elem)
        SetResList(restaurant_data);
        setCarouselTop(carouselHeader);
        setOriginalRestaurantList(restaurant_data);
    }

    
    return ResList.length===0  ?  (<Loading/> ) :  (
        <>
        <div className=''>

            <div>
            <CarouselContainer  CarouselTopprops={CarouselTop} />
            </div>
            <LineBreaks/>
            <div> 
            <TopRestaurantList className="" TopRestaurant={TopRestaurant}/>
            </div>
            <LineBreaks/>
            <div className='flex gap-3 m-3 justify-center'>
            <input type='search' data-testid="searchInput" className="border border-black border-solid rounded-md px-1" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/>
            <button className=" px-4 py-1 border border-solid border-orange-800 bg-orange-500 text-white rounded-sm mr-10" onClick={()=>{
                {
                    const filteredList=OriginalRestaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    SetResList(filteredList);
                }
            }}>Search</button>
            <button data-testid="topratedbtn" className=" px-4 py-1 border border-solid border-orange-800 bg-orange-500 text-white rounded-sm" onClick={()=>
                {const filteredList=OriginalRestaurantList.filter((rescards)=>rescards.info.avgRating >4.3 )
                    SetResList(filteredList)
                }

            }>{"Top Rated Restaurants >>"}</button>
                       <label>Username:</label> 
            <input type='search' className="border border-black border-solid rounded-md px-1" value={loggedInUser} onChange={(e)=>setuserName(e.target.value)}/>

            </div>

            <RestaurantContainer  ResList={ResList}/>

        </div>
        </>
    )
}

export default Body;