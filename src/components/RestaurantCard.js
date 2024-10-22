import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {restaurantData}=props;
    const {name,cloudinaryImageId,areaName,cuisines,avgRating,sla}=restaurantData.info
    return (
        <>
            <div className='w-56 h-72 ml-14 hover:scale-[0.9] relative'>
                {/* Image Container */}
                <div className="relative">
                    <img 
                        className='w-56 h-40 rounded-xl' 
                        src={CDN_URL + cloudinaryImageId} 
                        alt={name}
                    />
                    {/* Darken and Blur Effect */}
                    <div className='absolute bottom-0 left-0 w-full h-[3rem] bg-gradient-to-t from-black/100 to-transparent rounded-b-xl'></div>
                </div>

                {/* Restaurant Details */}
                <div className='flex flex-col'>
                    <span className='font-bold '>{name}</span>
                    <span className='font-semibold'>{avgRating + " · " + sla.slaString}</span>
                    <span className='text-slate-600 capitalize'>{areaName.toLowerCase()}</span>
                    <span className='overflow-ellipsis text-slate-600 text-sm'>{cuisines.join(", ")}</span>
                </div>
            </div>
        </>
    )
}

export const WithOfferDetails =(RestaurantCard)=>{
    return (props)=>{
        // console.log(props)
        return (<div className="relative">
        <span className="ml-20 absolute top-[130px] z-50 text-white font-bold text-lg -left-4">{props.restaurantData.info.aggregatedDiscountInfoV3.header+" "+props.restaurantData.info.aggregatedDiscountInfoV3.subHeader}</span>

        <RestaurantCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;
