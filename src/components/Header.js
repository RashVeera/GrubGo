import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    return (
        <>
        <div className='header-container'>
            <img className='logo' src={LOGO_URL} />
            <ul className='links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>

            </ul>
        </div>
        </>
    )
}

export default Header;