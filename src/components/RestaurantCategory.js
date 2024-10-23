import React,{useState} from 'react'
import downarrow from "../assets/images/downarrow.png"
import uparrow from "../assets/images/uparrow.png"
import MenuItem from './MenuItem'


const RestaurantCategory = ({groupedcategory,show,showItems,collapse}) => {

    // const [show,setShow]=useState(false)
    const toggleaccordion =()=>{
        // setShow(!show)
        !show ? showItems():collapse()
    }

  return (
          <div className=' mb-5'>
            <div className='flex justify-between cursor-pointer' onClick={
              ()=>{toggleaccordion()}
            }>
              <h1 className='font-bold text-xl my-3'>{groupedcategory.card.card.title} ({groupedcategory.card.card.itemCards.length})</h1>
              <img className='z-20 h-5 w-5 self-center mr-7 rounded-full' src={show?uparrow:downarrow}/>
              </div>
    {show && groupedcategory.card.card.itemCards.map((menuitem)=>{
        return   <MenuItem key={menuitem.card.info.id} menuitem={menuitem} />
    })
    }

    <div className='bg-gray-100 h-5 mt-1 w-full'></div>
          </div>

  )
}

export default RestaurantCategory