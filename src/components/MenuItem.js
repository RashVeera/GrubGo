import React from 'react'
import { useDispatch } from 'react-redux';
import { Additems } from '../utils/CartSlice';

const MenuItem = ({menuitem}) => {
  const {name,defaultPrice,finalPrice,price,ratings,description,imageId}=menuitem.card.info;
  const dispatch=useDispatch()
  const handleAddItems= (menuitem)=>{
    dispatch(Additems(menuitem))
  }
  return (
    <div className=''>
                <hr/>

    <div className='flex items-center my-7 py-2 gap-2 justify-between'>    
    
    <div className='flex flex-col  w-4/6 '>
        <span className='font-bold text-slate-600 text-lg'>{name}</span>
        <span className='font-bold'>₹ {defaultPrice/100 ||finalPrice/100 || price/100 }</span>
        <span className='text-green-900 font-bold text-sm my-2'>{ratings.aggregatedRating.rating || ""}</span>
        <span className='text-sm text-slate-500 font-normal overflow-ellipsis'>{description}</span>
    </div>
    <div className='relative'>
    <img className='w-40 h-36 rounded-xl ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId}/>
    <button onClick={()=>handleAddItems(menuitem)} className='absolute bg-white top-28 px-3 py-2 border border-green-400 text-green-500 text-lg font-bold w-28 ml-6 rounded-md'>ADD</button>
    </div>
    </div>
        </div>



  )
}

export default MenuItem