import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {restaurantData}=props;
    const {name,cloudinaryImageId,areaName,cuisines,avgRating,sla}=restaurantData.info
    return (
        <>
        <div className='w-56 h-72 ml-14 hover:scale-[0.9] '>
            <img className='w-56 h-40 rounded-xl' src={CDN_URL+cloudinaryImageId }/>
        
        <div className='flex flex-col'>
        <span className='font-bold '>{name}</span>
        <span className='font-semibold'>{avgRating +" . " + sla.slaString}</span>
        <span className='text-slate-600 capitalize'>{areaName.toLowerCase()}</span>
        <span className='overflow-ellipsis text-slate-600 text-sm'>{cuisines.join(", ")}</span>
        </div>

        </div>
        </>
    )
}

export default RestaurantCard;
