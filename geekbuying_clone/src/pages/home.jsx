import "../style/Home.css";
import CaptionCarousel from "../components/slider1";


export const Home = () => {
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
                        <div id="dealOfDayProducts"></div>
                    </div>
                    <div id="FeaturedProductsDiv">
                        <div id="textFeaturedproducts">
                            <h2>Featured Products</h2>
                        </div>
                        <div id="FeaturedProducts"></div>
                    </div>
                </div>
            </div>

            <div id="TrendingCategoryDiv">
                <div id="textTrendingCategory">
                    <h2>Trending Categories</h2>
                </div>
                <div id="TrendingCategory">
                    <div className="TrendingCategory"></div>
                    <div className="TrendingCategory"></div>
                    <div className="TrendingCategory"></div>
                </div>
            </div>

            <div id="NewForYouDiv">
                <div id="textNewForYou">
                    <h2>New For You </h2>
                    <p>See More</p>
                </div>
                <div id="NewForYou">
                    <div className="NewForYou"></div>
                    <div className="NewForYou"></div>
                    <div className="NewForYou"></div>
                    <div className="NewForYou"></div>
                </div>
            </div>

            <div id="EnjoyLifeDiv">
                <h2>Enjoy Life</h2>
                <div id="EnjoyLife">
                    <div id="EnjoyLifeBanner"></div>
                    <div id="EnjoyLifeProductDiv">
                        <div className="EnjoyLifeProduct"></div>
                        <div className="EnjoyLifeProduct"></div>
                        <div className="EnjoyLifeProduct"></div>
                        <div className="EnjoyLifeProduct"></div>
                    </div>
                </div>
            </div>

            <div id="BestSellerDiv">
                <div id="BestSellerText">
                    <h2>Best Sellers </h2>
                    <p>See More</p>
                </div>
                <div id="BestSeller">
                    <div className="BestSellerProduct"></div>
                    <div className="BestSellerProduct"></div>
                    <div className="BestSellerProduct"></div>
                    <div className="BestSellerProduct"></div>
                </div>
            </div>

            <div id="PopularBrandsDiv">
                <h2>Popular Brands</h2>
                <div id="bannerPopularBrands"></div>
                <div className="PopularBrandsSingleDiv">
                    <div id="brandBanner"></div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div id="brandBanner"></div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div id="brandBanner"></div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                        <div className="brandproducts"></div>
                    </div>
                </div>
                <div className="PopularBrandsSingleDiv">
                    <div id="brandBanner"></div>
                    <div id="brandProductsDiv">
                        <div className="brandproducts"></div>
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
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                    <div className="RecommendedProduct"></div>
                </div>
            </div>
        </div>
    )
}