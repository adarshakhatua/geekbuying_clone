import "../style/Home.css";
import CaptionCarousel from "../components/slider1";
import BrandSlider from "../components/popularBrandsSlider";
import { AiFillStar } from "react-icons/ai";
import { MultiItemCarousel, BestSellerMultiItemCarousel, RecommendedMultiItemCarousel } from "../components/productSlider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchDealOfDayProduct, fetchFeatureProduct,fetchNewForUProduct,fetchBrand1Product,fetchBrand2Product,fetchBrand3Product,fetchBrand4Product } from "../redux/products/action";



export const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.product.data);
    const newForYou = useSelector((store) => store.product.newForYou);
    const dealOfDay = useSelector((store) => store.product.deal_of_day);
    const feature_product = useSelector((store) => store.product.feature_product);
    const brand1 = useSelector((store) => store.product.brand1);
    const brand2 = useSelector((store) => store.product.brand2);
    const brand3 = useSelector((store) => store.product.brand3);
    const brand4 = useSelector((store) => store.product.brand4);
    const [timer, setTimer] = useState(28000);
    const [id, setId] = useState(null);
    console.log(brand1);
    useEffect(() => {
        !newForYou.length && dispatch(fetchNewForUProduct({ "tag": "new for you" }));
        !data.length && dispatch(fetchProduct());
        !dealOfDay.length && dispatch(fetchDealOfDayProduct({ "tag": "deal of day" }));
        !feature_product.length && dispatch(fetchFeatureProduct({ "tag": "feature Product" }));
        !brand1.length && dispatch(fetchBrand1Product({ "brand": "Tronsmart" }));
        !brand2.length && dispatch(fetchBrand2Product({ "brand": "SCULPFUN" }));
        !brand3.length && dispatch(fetchBrand3Product({ "brand": "JIMMY" }));
        !brand4.length && dispatch(fetchBrand4Product({ "brand": "ELEGLIDE" }));
    }, [])

    useEffect(() => {
        const TimerFn = () => {
            if (!id) {
                const Id = setInterval(() => { setTimer((timer) => timer - 1) }, 1000);
                setId(Id);
            }
            else {
                
                clearInterval(id)
            }
        }
        TimerFn();
    }, [id]);
    useEffect(() => {
        if (timer <= 0) {  
            clearInterval(id);
        }
    }, [timer])
    
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
                            <p>Ends in {Math.floor(timer / (3600 * 24))}:{Math.floor(timer / (3600))}:{Math.floor((timer % 3600) / 60)}:{Math.floor((timer % 60))}</p>
                        </div>
                        <div id="dealOfDayProducts">
                            {dealOfDay?.map((item) =>
                                <DealOfDay image={item.img} price={item.price} StricePrice={item.strick_of_price} key={item.title} />)}
                        </div>
                    </div>
                    <div id="FeaturedProductsDiv">
                        <div id="textFeaturedproducts">
                            <h2>Featured Products</h2>
                        </div>
                        <div id="FeaturedProducts">
                            {feature_product?.map((item) =>
                                <FeatureProduct image={item.img} title={item.title} price={item.price} strikePrice={item.strick_of_price} key={ item.title} />
                            )}
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
                        <MultiItemCarousel data={newForYou} />
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
                        {brand1?.map((item) =>
                            <BrandProduct image={item.img} title={item.title} price={item.price} strikePrice={item.strick_of_price} key={item.title} />
                        )}
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/sculpfun-20220617114417913._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        {brand2?.map((item) =>
                            <BrandProduct image={item.img} title={item.title} price={item.price} strikePrice={item.strick_of_price} key={item.title} />
                        )}
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/jimmy-20200910094916929._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        {brand3?.map((item) =>
                            <BrandProduct image={item.img} title={item.title} price={item.price} strikePrice={item.strick_of_price} key={item.title} />
                        )}
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div className="brandBanner">
                        <img src="https://img.gkbcdn.com/bb/eleglide-20220531151324673._p1_.jpg" alt="" />
                    </div>
                    <div id="brandProductsDiv">
                        {brand4?.map((item) =>
                            <BrandProduct image={item.img} title={item.title} price={item.price} strikePrice={item.strick_of_price} key={item.title} />
                        )}
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

const DealOfDay = ({image,price,StricePrice}) => {
    return (
        <div className="dealOfDayProductsSingleDiv">
            <div className="dealOfDayProductsSingleImgDiv">
                <img src={image} alt="" />
            </div>
            <div className="dealOfDayProductsSingleDetailsDiv">
                <div className="dealOfDayProductsSingleOffDiv">25% OFF</div>
                <h3>₹ {price}</h3>
                <p>₹ {StricePrice}</p>
            </div>
            <div className="dealOfDayProductsSingleBottomDiv">
                <div className="dealOfDayProductsSingleStatDiv">
                    <div className="dealOfDayProductsSingleProgressDiv"></div>
                </div>
                <p>54 left</p>
            </div>
        </div>
    )
}

const FeatureProduct = ({image,title,price,strikePrice}) => {
    return (
        <div className="FeaturedProductsSingle">
            <div className="FeaturedProductsSingleImg">
                <img src={image} alt="" />
            </div>
            <div className="FeaturedProductsSingleContent">
                <h3>{title}</h3>
                <h4>₹ {price}</h4>
                <p>₹{strikePrice}</p>
            </div>
        </div>
    )
}

const BrandProduct = ({image,title,price,strikePrice}) => {
    return (
        <div className="brandproducts">
            <div className="brandproductsImg">
                <img src={image} alt="" />
            </div>
            <div className="brandproductsContent">
                <div className="brandproductsContentOff">24% OFF</div>
                <h3>{title}</h3>
                <h4>₹ {price}</h4>
                <p>₹ {strikePrice}</p>
            </div>
        </div>
    )
}