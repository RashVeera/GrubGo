import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {restaurantData}=props;
    const {name,cloudinaryImageId,areaName,cuisines,avgRating,sla}=restaurantData.info
    return (
        <>
        <div className='res-card'>
            <img className='card-logo' src={CDN_URL+cloudinaryImageId }/>
        
        <div className='infoCardContent'>
        <span className='title-name'>{name}</span>
        <span className='deliverytime'>{avgRating +" . " + sla.slaString}</span>
        <span className='area-Name'>{areaName}</span>
        <span className='cuisines-Name'>{cuisines.join(",")}</span>
        </div>

        </div>
        </>
    )
}

export default RestaurantCard;
