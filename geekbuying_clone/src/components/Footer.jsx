import "../style/Footer.css";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";
import { CgFacebook } from "react-icons/cg";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import stock from "./files/stock.png";
import payments from "./files/payments.png";
import offers from "./files/offers.png";
import cs_support from "./files/customer support.png";
import { useState } from "react";
import company from "./files/company.png";
import reseller from "./files/reseller.png";
import trustpilot from "./files/trustpilot.png";
import tictok from "./files/tictok.png";


export const Footer = () => {
    const [noShow, setNoShow] = useState(false);
    const handleNoShow = () => {
        setNoShow(!noShow);
    };

    return (
        <div id="footer">
            <div id="topFooterDiv">
                <div id="topFooterShowDiv">
                    <div id="topFooterShowDivContent" onClick={handleNoShow}>
                        <p>Why buy from geekbuying?</p>{!noShow?<GoPlus />:<HiOutlineMinusSm/>}
                    </div>
                </div>
                {noShow?<div id="topFooterNoShowDiv">
                    <div className="topFooterNoShowDivItems">
                        <div className="noShowItemIcon"><img src={offers} alt="" /></div>
                        <h4>Amazing offers</h4>
                        <p>Find best offers for smart gadgets at one place.</p>
                    </div>
                    <div className="topFooterNoShowDivItems">
                        <div className="noShowItemIcon"><img src={payments} alt="" /></div>
                        <h4>Easy & secure payments</h4>
                        <p>Pay directly via PayPal or Klarna among other payment options.</p>
                    </div>
                    <div className="topFooterNoShowDivItems">
                        <div className="noShowItemIcon"><img src={stock} alt="" /></div>
                        <h4>Local stock & fast shipping</h4>
                        <p>Buy from local stock and ship within 48-hour.</p>
                    </div>
                    <div className="topFooterNoShowDivItems">
                        <div className="noShowItemIcon"><img src={cs_support} alt="" /></div>
                        <h4>Customer support</h4>
                        <p>24-hour customer support for all your queries.</p>
                    </div>
                </div>:null}
            </div>
            <div id="subscribeFooterDiv">
                <input type="text" placeholder="Enter email to get a 5% off coupon"/>
                <button>Subscribe</button>
            </div>
            <div id="footerManiContentDiv">
                <div id="footerManiContent">
                    <div id="footerHelp">
                        <h3>Help</h3>
                        <p>Order status</p>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Warranty</p>
                        <p>FAQs</p>
                        <p>Sitemap</p>
                    </div>
                    <div id="footerSupport">
                        <h3>Support</h3>
                        <p>Payment information</p>
                        <p>Shipping guide</p>
                        <p> Wholesale</p>
                        <p>Drop shipping</p>
                        <p>Blog</p>
                        <p>Affiliates</p>
                    </div>
                    <div id="footerPolicies">
                        <h3>Policies</h3>                      
                        <p>Terms & conditions</p>
                        <p> Return policy</p>
                        <p> Privacy</p>
                        <p> Declaration</p>
                        <p>Customs</p>
                    </div>
                    <div id="footerApp">
                        <h3>Download The App</h3>
                        <div id="appDIv">
                            <div id="leftApp"><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" alt="" /></div>
                            <div id="rightApp">
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt="" /></div>
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt="" /></div>
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt="" /></div>
                            </div>
                        </div>
                        <h3>Connect with us</h3>
                        <div id="socialDiv">
                            <div><CgFacebook/></div>
                            <div><AiFillYoutube/></div>
                            <div><FaTelegramPlane/></div>
                            <div><TiSocialInstagram/></div>
                            <div><AiOutlineTwitter/></div>
                            <div><img src={tictok} alt="" /></div>
                        </div>
                    </div>
                    <div id="footerTicket">
                        <div> Service_payment@geekbuying.com</div>
                        <div>Ticket</div>
                        <div>Live Chat</div>
                    </div>
                </div>
                <div id="footerManiContentPolpular">
                    <h3>Popular Searches</h3>
                    <div id="popularItems">
                        <div>Geekbuying Coupon</div>
                        <div>Roborock Q7 Max</div>
                        <div>Tronsmart Bluetooth Speakers</div>
                        <div>Windows Mini PC</div>
                        <div>ENGWE X26</div>
                        <div>android tv boxes</div>
                        <div>KugooKirin G2 Pro</div>
                        <div>LDS Robot Vacuum</div>
                        <div>Electric Bike</div>
                        <div>OnexPlayer mini AMD</div>
                    </div>
                </div>
                <div id="footerManiContentLanguage">
                    <div>English</div>
                    <div>Español</div>
                    <div>Français</div>
                    <div>Deutsch</div>
                    <div>Italiano</div>
                    <div>Português</div>
                    <div>Nederlands</div>
                    <div>Polski</div>
                    <div>Русский</div>
                    <div>Türkçe</div>
                    <div>ελληνικά</div>
                    <div>Magyar</div>
                    <div>עברית</div>
                    <div>لعربية</div>
                    <div>ไทย</div>
                    <div>日本語</div>
                </div>
            </div>
            <div id="footerCompanyDiv">
                <div id="footerCompany">
                    <img src={company} alt="" id="companyImg"/>
                    <img src={reseller} alt="" id="resellerImg"/>
                    <img src={trustpilot} alt="" id="trustpilotImg"/>
                </div>
                <div id="footerCopyRight">
                    <p>Copyright © 2012-2022 GeekBuying.com. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}