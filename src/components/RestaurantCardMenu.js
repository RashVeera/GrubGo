import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import MenuItem from './MenuItem'
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    
    <div className='w-6/12 ml-96 mt-14'>
          <h1 className='font-bold text-2xl '>{name}</h1>

      <div className='flex flex-col border my-6 border-gray-300 shadow-2xl rounded-md p-4 gap-2 '>
    <h3 className='font-semibold'>{avgRating} . {costForTwoMessage} </h3>
    <span className='text-orange-600 underline font-semibold'>{cuisines.join(", ")}</span>
    <span className='text-gray-600  text-sm'> <span className='font-semibold text-black'>Outlet</span> {areaName}</span>
      </div>
    {/* {console.log(GroupedCarddetails)} */}
    <h1 className='font-bold text-2xl my-3'>{title}</h1>
    {itemCards.map((menuitem)=>{
        return  <MenuItem key={menuitem.card.info.id} menuitem={menuitem} />
    })
    }
    </div>
  )
}

export default RestaurantCardMenu