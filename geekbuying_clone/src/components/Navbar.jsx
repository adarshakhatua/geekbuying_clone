import "../style/Nav.css";
import { ImMobile2 } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../logo.png";
import IndiaFlag from "../india.png";
import { navData } from "./data";

export const Nav = () => {
    return (
        <>
            <NavbarTop></NavbarTop>
            <Navbar></Navbar>
            <NavbarBottom></NavbarBottom>
        </>
    )
}

 const Navbar = () => {
    const [shipping, setShipping] = useState(false);
    const handleShippingPop = (data) => {
        setShipping(data)
    }
    const [signin, setSignin] = useState(false);
    const handleSigninPop = (data) => {
        setSignin(data)
    }
    const [cart, setCart] = useState(false);
    const handleCartPop = (data) => {
        setCart(data)
    }
    return (
        <div id="navbarDiv">
            <div id="logoDiv"><img src={Logo} alt="" /></div>
            
            <div id="searchDiv">
                <div id="searchDiv_sub">All Categories <IoMdArrowDropdown/></div>
                <input type="text" placeholder="Search by keywords" />
                <div id="searchIcon"><BsSearch/></div>
            </div>
            
            <div id="accountDiv">
                <div id="shippingMainDiv" onMouseEnter={() => { handleShippingPop(true) }} onMouseLeave={() => { handleShippingPop(false) }}>
                    <div>Ship to</div>
                    <div id="shippingDiv">
                        <div id="countryFlag"><img src={IndiaFlag} alt="" /></div>
                        <div id="currencyDiv">/INR<IoMdArrowDropdown /></div>
                        {shipping?<ShippingPop></ShippingPop>:null}
                    </div>
                </div>

                <div id="signInDiv" onMouseEnter={()=>{handleSigninPop(true)}} onMouseLeave={()=>{handleSigninPop(false)}}>
                    <AiOutlineUser/>
                    <p>sign in</p>
                    {signin ? <SignInPop></SignInPop> : null}
                </div>

                <div id="cartDiv" onMouseEnter={()=>{handleCartPop(true)}} onMouseLeave={()=>{handleCartPop(false)}}><CgShoppingCart /><div id="cartCounter">0</div>
                    {cart ? <CartPop></CartPop> : null}
                </div>
            </div>
            
        </div>
    )
}

const ShippingPop = () => {
    return (
        <div id="shippingPopDiv">
            <div id="pointer"></div>
            <h3>Select Regional Settings</h3>
            <h4>Ship to</h4>
            <div name="country" id="country">
                <li value="india"><div>{<img src="https://cdn.iconscout.com/icon/free/png-64/india-flag-country-nation-union-empire-32988.png" />}{<p>India</p>}</div><div><IoMdArrowDropdown /></div></li>
            </div>
            <h4>Currency</h4>
            <div>
                <li value="india"><div>{<p>INR ???</p>}</div><div><IoMdArrowDropdown /></div></li>
            </div>
            <button>Save</button>
        </div>
    )
}

const SignInPop = () => {
    return (
        <div id="signInPop">
            <div id="signPointer"></div>
            <div id="welcomeGreet">Welcome to Geekbuying</div>
            <div id="buttonDivSignInPop">
                <button id="joinBtn">Join</button>
                <button id="signInBtn">Sign In</button>
            </div>
            <div id="orTopDiv"></div>
            <div id="orDiv">or</div>
            <div id="googleAuthDiv"><FcGoogle/></div>
        </div>
    )
}

const CartPop = () => {
    return (
        <div id="cartPopDiv">
            <div id="cartPointer"></div>
            {<><div id="cartItems"></div>
                <div id="cartTotal">
                    <div id="totalItems"></div>
                    <div id="totalPrice"></div>
                </div>
                <button id="cartPopButton">View My Cart</button></>}
        </div>
    )
}
 const NavbarTop = () => {

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

 const NavbarBottom = () => {
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
            {mount ? <NavBottomDrop2 mount2={mount2}></NavBottomDrop2>:null}
        </div>
    )       
}


const NavBottomDrop2 = ({ mount2 }) => {

    let data = navData[mount2];
    //console.log(data)
    return (
        <div id="NavBottomDrop2"
            key={mount2}
            className={(mount2 === "local_warehouse") ?
                "class1" : (mount2 === "sports_outdoors") ?
                    "class2" : (mount2 === "smart_home_garden") ?
                        "class2" : (mount2 === "consumer_electronics") ?
                            "class2" : (mount2 === "phone_accessories") ?
                                "class00" : (mount2 === "tv_boxex_mini_pcs") ?
                                    "class00" : (mount2 === "computer_tablet_accessories") ?
                                        "class02" : (mount2 === "toy_hobbies") ?
                                            "class02" : (mount2 === "wearable_devices") ?
                                                "class00" : (mount2 === "security_system") ?
                                                    "class00" : (mount2 === "automobile_motorcycle") ?
                                                        "class00" : (mount2 === "fashion") ?
                                                            "class00" : null}>
            {mount2?Object.entries(data).map(([key, val]) => {
                return (
                    <div className="NavBottomDropItems" key={key}>
                        <dl key={key}>
                            <dt key={key}>{key !== "image" ? key : null}</dt>
                            {key !== "image" && val.map((item) => <dd key={item}>{item}</dd>)}

                            {key === "image" ? <div className="imgDiv"><img src={val} /></div> : null}

                        </dl>
                    </div>
                )
            }):null}
        </div>
    )
}

