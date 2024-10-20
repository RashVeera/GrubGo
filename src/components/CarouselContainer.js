import React from 'react'
import CarouselDaily from './CarouselDaily';

const CarouselContainer = ({CarouselTopprops}) => {
  return (
    <>
        <div className="ml-40 my-3 w-5/6">
        <div className="ml-1">
        <h2 className='font-bold text-lg overflow-ellipsis'>{CarouselTopprops.header.title}</h2>
        {/* <div className="redirect-buttons">
        <button onClick={()=>{
            
        }}>{" < "}</button>
        <button onClick={()=>{

        }}>{" > "}</button>
        </div> */}
        </div>

    </div>
    <div className='mb-9 w-5/6 flex flex-shrink-0 overflow-x-scroll ml-40 gap-2 overflow-y-hidden'>
            { CarouselTopprops.imageGridCards.info.map((carousel)=>{
                return <CarouselDaily key={carousel.id} carouselitem={carousel}  />
                })}
        </div>
    </>
  )
}

export default CarouselContainer