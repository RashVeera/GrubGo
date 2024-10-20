import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
    const isOnline=useOnlineStatus();
    return (
        <>
        <div className='header-container'>
            <Link to="/"><img className='logo' src={LOGO_URL} /></Link>
            <ul className='links'>
                <li>Online Staus: {isOnline?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
               <li> <Link to="/about">About Us</Link></li>
               <li> <Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>  
                <button onClick={()=>{
                btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }} className="Loginbtn">{btnName}</button>
            </ul>
        </div>
        </>
    )
}

export default Header;