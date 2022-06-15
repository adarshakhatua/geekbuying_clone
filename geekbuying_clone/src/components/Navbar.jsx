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
import { navData } from "./data";

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
    const [mount, setMount] = useState(false);
    const handleMount = (data) => {
        setMount(data)
    }
    return (
        <div id="NavbarBottom">
            <div id="NavbarBottomContent">
                <div
                    id="NavbarBottomCategories"
                    className="NavBottomSub"
                    onMouseEnter={() => { handleMount(true)}}
                    onMouseLeave={() => { handleMount(false) }}>
                    <>
                        <IoMdMenu />
                        <p>Categories</p>
                    </>
                    {mount ? <NavBottomDrop1 ></NavBottomDrop1> : null}
                </div>
                
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

const NavBottomDrop1 = () => {
    const [mount, setMount] = useState(false);
    const handleMount = (data) => { setMount(data) };
    const [mount2, setMount2] = useState(null);
    const handleMount2 = (data) => { setMount2(data) };
    console.log(mount2)
    return (
        <div id="NavBottomDrop1"
            onMouseEnter={() => { handleMount(true) }}
            onMouseLeave={() => { handleMount(false) }}>   
            <ul >
                <li onMouseEnter={() => { handleMount2("local_warehouse")}}>
                    Local Warehouses
                </li>
                <li onMouseEnter={() => { handleMount2("sports_outdoors") }}>
                    Sports &amp; Outdoors
                </li>
                <li onMouseEnter={() => { handleMount2("smart_home_garden") }}>
                    Smart Home &amp; Garden
                </li>
                <li onMouseEnter={() => { handleMount2("consumer_electronics") }}>
                    Consumer Electronics
                </li>
                <li onMouseEnter={() => { handleMount2("phone_accessories") }}>
                    Phones &amp; Accessories
                </li>
                <li onMouseEnter={() => { handleMount2("tv_boxex_mini_pcs") }}>
                    TV Boxes &amp; Mini PCs
                </li>
                <li onMouseEnter={() => { handleMount2("computer_tablet_accessories") }}>
                    Computers, Tablets &amp; Accessories
                </li>
                <li onMouseEnter={() => { handleMount2("toy_hobbies") }}>
                    Toys &amp; Hobbies
                </li>
                <li onMouseEnter={() => { handleMount2("wearable_devices") }}>
                    Wearable Devices
                </li>
                <li onMouseEnter={() => { handleMount2("security_system") }}>
                    Security System
                </li>
                <li onMouseEnter={() => { handleMount2("automobile_motorcycle") }}>
                    Automobiles &amp; Motorcycles
                </li>
                <li onMouseEnter={() => { handleMount2("fashion") }}>
                    Fashion
                    
                </li>
            </ul>
            {mount ? <NavBottomDrop2></NavBottomDrop2>:null}
        </div>
    )       
}


const NavBottomDrop2 = () => {
    return (
        <div id="NavBottomDrop2">
            <h1>hello</h1>
        </div>
    )
}

