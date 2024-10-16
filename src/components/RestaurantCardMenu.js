import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import MenuItem from './MenuItem'

const RestaurantCardMenu = () => {
    const [RestaurantInfo,setRestaurantInfo]=useState([])
    const [GroupedCarddetails,setGroupedCarddetails]=useState([])
    const {resId}=useParams()
    const fetchMenu=async ()=>{
        const url=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.035713261544618&lng=80.19712787121533&restaurantId="+resId+"&catalog_qa=undefined")
        const data=await url.json();
        // console.log(data);
        const ResInfo=data.data.cards[2].card.card.info
        const Groupcard=data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
        setRestaurantInfo(ResInfo)
        setGroupedCarddetails(Groupcard)
    }

    useEffect(()=>{
        fetchMenu();
    },[])
    if (RestaurantInfo.length===0 || GroupedCarddetails.length===0){
       return <Loading/>
    }
    const {name,avgRating,costForTwoMessage,cuisines,areaName}=RestaurantInfo;
    const {title}=GroupedCarddetails.card.card
    const {itemCards}=GroupedCarddetails.card.card

  return (
    
    <div className='restaurant-card-menu-container'>
    <h1>{name}</h1>
    <h3>{avgRating} . {costForTwoMessage}</h3>
    <span>{cuisines.join(", ")}</span>
    <span>Outlet - {areaName}</span>
    {console.log(GroupedCarddetails)}
    <h1>{title}</h1>
    {itemCards.map((menuitem)=>{
        return  <MenuItem  menuitem={menuitem} />
    })
    }
    </div>
  )
}

export default RestaurantCardMenu