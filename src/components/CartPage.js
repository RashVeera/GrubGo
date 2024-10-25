import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import LineBreaks from './LineBreaks'
import { Link } from 'react-router-dom'
import { clearCart } from '../utils/CartSlice'

const CartPage = () => {
    const cart=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    // console.log(cart)
    const price=cart.reduce((acc,cartitems)=>{
        acc=parseInt(acc)+parseInt(cartitems.card.info.price/100)
        return acc;
    },0);
    const cleartheCart =()=>{
        dispatch(clearCart())

    }
    // console.log(price)
  return (
    <>
    <div className='w-5/12 ml-96  '>

    <div className='ml-60 flex justify-between my-2 '>
        <span className='font-bold text-xl '>CartPage</span>
        <button onClick={cleartheCart} className='bg-orange-500 px-1 py-1 font-bold text-white'>Clear Cart</button>
    </div>
    {cart.length!==0?(
    <>
    {cart.map((cartitems)=>{
       return <MenuItem className="m-auto" menuitem={cartitems}/>
    })}
    <hr/>
    <div className='flex justify-between font-bold m-3'>
    <span>To Pay</span>
    <span>Rs. {price}</span>
    </div>
    <Link to="/payment"><button onClick={cleartheCart} className='ml-48 border border-solid border-orange-800 bg-orange-500  rounded-sm px-4 py-2 font-bold  text-white'>Proceed to Payment</button></Link>
    </>
    ):
    (
        <div className='h-96 flex flex-col justify-center align-middle '>
        <div className=' px-3 py-2  font-bold text-xl '>Your cart feels light. Would you like to eat something yummy?</div>
        <Link to="/"><button className='ml-52 my-8 border border-solid border-orange-800 bg-orange-500 text-white rounded-sm px-4 py-2 font-bold  '>View Restaurants</button></Link>
        </div>
    )}
    
    </div>
   
    </>
  )
}

export default CartPage