import "../style/Home.css";
import CaptionCarousel from "../components/slider1";
import BrandSlider from "../components/popularBrandsSlider";
import { AiFillStar } from "react-icons/ai";
import { MultiItemCarousel, BestSellerMultiItemCarousel, RecommendedMultiItemCarousel } from "../components/productSlider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/products/action";


export const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.product.data);
    
    useEffect(() => {
        dispatch(fetchProduct());
    },[])
    return (
        <div id="HomePage">
            <div id="anniversaryDiv">
                <h4>10th anniversary party on. Check our shopping guide & YouTube giveaway.</h4>
                <p>Check Now</p>
            </div>

            <div id="FirstDiv">
                <div id="imgSLider1"><CaptionCarousel /></div>
                <div id="DealOfDayDiv">
                    <div id="DealOfDay">
                        <div id="textDealOfDay">
                            <h2>Deal of the Day</h2>
                            <p>Ends in 00:19:16:25</p>
                        </div>
                        <div id="dealOfDayProducts">
                            <div className="dealOfDayProductsSingleDiv">
                                <div className="dealOfDayProductsSingleImgDiv">
                                    <img src="https://img.gkbcdn.com/p/2022-03-05/343ff9fe8cea46f48ba1025ffadf4a58-497360-0._w280_p1_.jpg" alt="" />
                                </div>
                                <div className="dealOfDayProductsSingleDetailsDiv">
                                    <div className="dealOfDayProductsSingleOffDiv">25% OFF</div>
                                    <h3>₹4025.53</h3>
                                    <p>₹5394.49</p>
                                </div>
                                <div className="dealOfDayProductsSingleBottomDiv">
                                    <div className="dealOfDayProductsSingleStatDiv">
                                        <div className="dealOfDayProductsSingleProgressDiv"></div>
                                    </div>
                                    <p>54 left</p>
                                </div>
                            </div>

                            <div className="dealOfDayProductsSingleDiv"></div>

                            <div className="dealOfDayProductsSingleDiv"></div>

                            <div className="dealOfDayProductsSingleDiv"></div>
                        </div>
                    </div>
                    <div id="FeaturedProductsDiv">
                        <div id="textFeaturedproducts">
                            <h2>Featured Products</h2>
                        </div>
                        <div id="FeaturedProducts">
                            <div className="FeaturedProductsSingle">
                                <div className="FeaturedProductsSingleImg">
                                    <img src="https://img.gkbcdn.com/p/2019-05-11/h96-max-rk3318-android-9-0-4gb-64gb-4k-tv-box-1574132538025._w280_p1_.jpg" alt="" />
                                </div>
                                <div className="FeaturedProductsSingleContent">
                                    <h3>H96 MAX RK3318 Android 9.0</h3>
                                    <h4>₹3783.95</h4>
                                    <p>₹4347.64</p>
                                </div>
                            </div>

                            <div className="FeaturedProductsSingle"></div>
                            <div className="FeaturedProductsSingle"></div>
                            <div className="FeaturedProductsSingle"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="TrendingCategoryDiv">
                <div id="textTrendingCategory">
                    <h2>Trending Categories</h2>
                </div>
                <div id="TrendingCategory">
                    <div className="TrendingCategory">
                        <div className="TrendingCategoryImg">
                            <img src="https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg" alt="" />
                        </div>
                        <div className="TrendingCategoryText">
                            <h3>Smart Home</h3>
                            <p>Smart cleaning robots and vacuums, keep floors constantly tidy with very little effort on your part.</p>
                        </div>
                    </div>
                    <div className="TrendingCategory">
                        <div className="TrendingCategoryImg">
                            <img src="https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg" alt="" />
                        </div>
                        <div className="TrendingCategoryText">
                            <h3>E-transport</h3>
                            <p>My ride. My speed. My way. I'm keeping up with myself.</p>
                        </div>
                    </div>
                    <div className="TrendingCategory">
                        <div className="TrendingCategoryImg">
                            <img src="https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg" alt="" />
                        </div>
                        <div className="TrendingCategoryText">
                            <h3>3D Printers</h3>
                            <p>3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="NewForYouDiv">
                <div id="textNewForYou">
                    <h2>New For You </h2>
                    <p>See More</p>
                </div>
                <div id="NewForYou">
                    <div className="NewForYouImg1">
                        <img src="https://img.gkbcdn.com/bn/2206/276x348-62a6e6f12b40c917a8566ce6._p1_.jpg" alt="" />
                    </div>

                    <div id="NewForYouSlider">
                        {/* <NewForYouCard /> */}
                        {/* <ProductSlider/> */}
                        <MultiItemCarousel data={data} />
                        {/* <div className="NewForYou"></div>
                        <div className="NewForYou"></div>
                        <div className="NewForYou"></div> */}
                    </div>
                </div>
            </div>

            <div id="EnjoyLifeDiv">
                <h2>Enjoy Life</h2>
                <div id="EnjoyLife">
                    <div id="EnjoyLifeBanner">
                        <img src="https://img.gkbcdn.com/bn/2205/500x632-6290272b2b40c91cb007bd35._p1_.jpg" alt="" />
                    </div>
                    <div id="EnjoyLifeProductDiv">
                        <div className="EnjoyLifeProduct">
                            <h3>How to go car-free, and ride safely</h3>
                            <div className="EnjoyLifeProductSingleDiv">
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x2102-62902a182b40c91cb09e7ad9._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Adventurers' electric scooter</div>
                                </div>
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x2104-62902c152b40c91cb09e7ada._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Cost-effective commuting</div>
                                </div>
                            </div>
                        </div>

                        <div className="EnjoyLifeProduct">
                            <h3>Efficiently work from home</h3>
                            <div className="EnjoyLifeProductSingleDiv">
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x2103-62902ce92b40c91cb09e7adb._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Lightweight laptop for play</div>
                                </div>
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x2105-62902f152b40c91cb09e7adc._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Health benefits for standing</div>
                                </div>
                            </div>
                        </div>

                        <div className="EnjoyLifeProduct">
                            <h3>Take the fun</h3>
                            <div className="EnjoyLifeProductSingleDiv">
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x210-629032502b40c91cb0af0c93._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Spring Black Friday is Here</div>
                                </div>

                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/s3/bn/2206/lALPJuZB2ShsBi3M0szS210210-629de75c2b40c92584276d1f.png" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Tronsmart TWS speaker</div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="EnjoyLifeProduct">
                            <h3>Unlimit your days</h3>
                            <div className="EnjoyLifeProductSingleDiv">
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x2102-629039202b40c91cb0d51f4c._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">TikTok Trending</div>
                                </div>
                                <div className="EnjoyLifeProductSingle">
                                    <div className="EnjoyLifeProductSingleImg">
                                        <img src="https://img.gkbcdn.com/bn/2205/210x210-6290393f2b40c91cb0d51f4d._p1_.jpg" alt="" />
                                    </div>
                                    <div className="EnjoyLifeProductSingleTitle">Kitchen & Dining</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div id="BestSellerDiv">
                <div id="BestSellerText">
                    <h2>Best Sellers </h2>
                    <p>See More</p>
                </div>
                <div id="BestSeller">
                    
                    {/* <BestSellerProduct/> */}
                    <BestSellerMultiItemCarousel data={data} />
                </div>
            </div>

            <div id="PopularBrandsDiv">
                <h2>Popular Brands</h2>
                <div id="bannerPopularBrands"><BrandSlider/></div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/tronsmart-20210123120544453._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts">
                            <div className="brandproductsImg">
                                <img src="https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg" alt="" />
                            </div>
                            <div className="brandproductsContent">
                                <div className="brandproductsContentOff">24% OFF</div>
                                <h3>ELEGLIDE M1 PLUS Electric Mountain Bike Upgraded Version</h3>
                                <h4>₹65103.50</h4>
                                <p>₹85362.43</p>
                            </div>
                        </div>

                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/jimmy-20200910094916929._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts">
                            <div className="brandproductsImg">
                                <img src="https://img.gkbcdn.com/p/2020-04-09/JIMMY-JV35-Anti-mite-Vacuum-Cleaner-Gray-899874-._w280_p1_.jpg" alt="" />
                            </div>
                            <div className="brandproductsContent">
                                <div className="brandproductsContentOff">19% OFF</div>
                                <h3>JIMMY JV35 Handheld Anti-mite Vacuum Cleaner High</h3>
                                <h4>₹11031.37</h4>
                                <p>₹13688.75</p>
                            </div>
                        </div>

                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/eleglide-20220531151324673._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts">
                            <div className="brandproductsImg">
                                <img src="https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w280_p1_.jpg" alt="" />
                            </div>
                            <div className="brandproductsContent">
                                <div className="brandproductsContentOff">24% OFF</div>
                                <h3>SCULPFUN S9 5.5W Laser Engraver, 0.06mm Ultra-Fine</h3>
                                <h4>₹23835.93</h4>
                                <p>₹32209.91</p>
                            </div>
                        </div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/sculpfun-20220617114417913._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts">
                            <div className="brandproductsImg">
                                <img src="https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg" alt="" />
                            </div>
                            <div className="brandproductsContent">
                                <div className="brandproductsContentOff">38% OFF</div>
                                <h3>Tronsmart T6 Plus Upgraded Edition Bluetooth 5.0 40W</h3>
                                <h4>₹4025.53</h4>
                                <p>₹6441.34</p>
                            </div>
                        </div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
            </div>

            <div id="RecommendedForYouDiv">
                <div id="textRecommendedForYou">
                    <h2>Recommended For You</h2>
                </div>
                <div id="RecommendedForYou">
                    <RecommendedMultiItemCarousel data={data} />
                </div>
            </div>
        </div>
    )
}


export const NewForYouCard = ({image,title,price}) => {
    return (
        <div className="NewForYou" >
            <div className="NewForYouImg">
                <img src={image} alt="" />
            </div>
            <div className="NewForYouContent">
                <h3>{title}</h3>
                <p>₹ {price}</p>
            </div>
        </div>
    )
}

export const BestSellerProduct = ({ image, title, price, strick_of_price, rating_count, }) => {
    return (
        <div className="BestSellerProduct">
            <div className="BestSellerProductImg">
                <img src={image} alt="" />
            </div>
            <div className="BestSellerProductContent">
                <div className="BestSellerProductOff">25% OFF</div>
                <h3>{title}</h3>
                <div className="BestSellerProductRating">
                    <div className="BestSellerProductRatingStar">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>{rating_count || 0}</p>
                </div>
                <h2>₹ {price}</h2>
                <p>₹ {strick_of_price || price}</p>
            </div>
        </div>
    )
}