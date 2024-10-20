import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import MenuItem from './MenuItem'
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantCardMenu = () => {
    const {resId}=useParams()
    const [RestaurantInfo,GroupedCarddetails]=useRestaurantMenu(resId);

    if (Object.keys(RestaurantInfo).length===0 || Object.keys(GroupedCarddetails).length===0){
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
    {/* {console.log(GroupedCarddetails)} */}
    <h1>{title}</h1>
    {itemCards.map((menuitem)=>{
        return  <MenuItem  menuitem={menuitem} />
    })
    }
    </div>
  )
}

export default RestaurantCardMenu