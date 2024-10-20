import { useEffect,useState } from "react";

const useRestaurantMenu =(resId)=>{
    const [RestaurantInfo,setRestaurantInfo]=useState({});
    const [GroupedCarddetails,setGroupedCarddetails]=useState({});

    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.035713261544618&lng=80.19712787121533&restaurantId="+resId+"&catalog_qa=undefined");
        const json=await data.json();
        const ResInfo=json.data.cards[2].card.card.info
        const Groupcard=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
        setRestaurantInfo(ResInfo)
        setGroupedCarddetails(Groupcard)

    }
    useEffect(()=>{
        fetchMenu()
    },[])

    return [RestaurantInfo,GroupedCarddetails];
}

export default useRestaurantMenu