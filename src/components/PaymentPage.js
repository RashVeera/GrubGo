import React from 'react'
import { Link } from 'react-router-dom'


const PaymentPage = () => {
  return (
    <div className='h-96 flex flex-col gap-7 justify-center items-center '>

    <div className=' font-bold text-xl'>Your Order is placed successfully!</div>
    <Link to="/"><button className=' border border-solid border-orange-800 bg-orange-500 rounded-sm px-4 py-2 font-bold  text-white'>Return to Home Page</button></Link>
    </div>
  )
}

export default PaymentPage