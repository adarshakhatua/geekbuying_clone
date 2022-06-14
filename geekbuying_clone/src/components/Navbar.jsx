import "../style/Nav.css";
import { ImMobile2 } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Logo from "../logo.png";
import IndiaFlag from "../india.png";

export const Navbar = () => {
    
    return (
        <div id="navbarDiv">
            <div id="logoDiv"><img src={Logo} alt="" /></div>
            
            <div id="searchDiv">
                <div id="searchDiv_sub">All Categories <IoMdArrowDropdown/></div>
                <input type="text" placeholder="Search by keywords" />
                <div id="searchIcon"><BsSearch/></div>
            </div>
            
            <div id="accountDiv">
                <div >
                    <div>Ship to</div>
                    <div id="shippingDiv">
                        <div id="countryFlag"><img src={IndiaFlag} alt="" /></div>
                        <div id="currencyDiv">/INR<IoMdArrowDropdown /></div>
                    </div>
                </div>

                <div id="signInDiv">
                    <AiOutlineUser/>
                    <p>sign in</p>
                </div>

                <div id="cartDiv"><CgShoppingCart/><div id="cartCounter">0</div></div>
            </div>
            
        </div>
    )
}
export const NavbarTop = () => {

    return (
        <div id="navbarTop">
            <div id="navbarTop_content">
                <div ><Arrow icon={<ImMobile2 />} text={"Save BIG with our app!"}></Arrow></div>
                <div ><Arrow text={"Language"}></Arrow></div>
                <div ><Arrow text={"Support Center"}></Arrow></div>
            </div>
        </div>
    )
}

const Arrow = ({icon,text}) => {
    const [arrow, setArrow] = useState(false);
    const handleArrow = (data) => {
        setArrow(data);
    }
    return (
        <div className="navbarTop_content_sub" onMouseEnter={() => { handleArrow(true) }} onMouseLeave={() => { handleArrow(false) }}><p>{icon}</p><p>{text}</p><p>{arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}</p></div>
    )
}

export const NavbarBottom = () => {

    return (
        <div id="NavbarBottom">
            <div id="NavbarBottomContent">
                <div id="NavbarBottomSub1" className="NavBottomSub"><IoMdMenu /> Categories</div>
                <div className="NavBottomSub">New</div>
                <div className="NavBottomSub">Bestselling</div>
                <div className="NavBottomSub">Brand</div>
                <div className="NavBottomSub">Clearance</div>
                <div className="NavBottomSub">Deals</div>
                <div className="NavBottomSub">Coupon</div>
                <div className="NavBottomSub">App Only</div>
            </div>
        </div>
    )
}