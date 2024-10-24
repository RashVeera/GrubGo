import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
    const isOnline=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext)
    const cart=useSelector((store)=>store.cart.items)
    console.log(cart)
    return (
        <>
        <div className='flex justify-between mb-5 sticky top-0 z-[100] bg-white px-3 shadow-md '>
            <Link to="/"><img className='py-2 w-16 rounded-full' src={LOGO_URL} /></Link>
            <ul className='flex gap-6 items-center'>
                <li>Online Status: {isOnline?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
               <li> <Link to="/about">About Us</Link></li>
               <li> <Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>  
                <Link to="/cart"><span className=" hover:text-green-500"> <span className="bg-orange-600 text-white font-bold hover:bg-green-500 py-1 px-2 rounded-lg">{cart.length}</span> Cart</span></Link>
                <button onClick={()=>{
                btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }} className="Loginbtn">{btnName}</button>
                <span>{loggedInUser}</span>
            </ul>
        </div>
        </>
    )
}

export default Header;