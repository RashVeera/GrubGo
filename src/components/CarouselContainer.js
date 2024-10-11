import React from 'react'
import CarouselDaily from './CarouselDaily';

const CarouselContainer = ({CarouselTopprops}) => {
  return (
        <div className="whole-carousel-container">
        <div className="header-carousel">
        <h2>{CarouselTopprops.header.title}</h2>
        <div className="redirect-buttons">
        <button onClick={()=>{
            
        }}>{" < "}</button>
        <button onClick={()=>{

        }}>{" > "}</button>
        </div>
        </div>
        <div className='carousel-container'>
            { CarouselTopprops.imageGridCards.info.map((carousel)=>{
                return <CarouselDaily carouselitem={carousel}  />
                })}
        </div>
    </div>
  )
}

export default CarouselContainer