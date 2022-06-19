import "../style/ProductDetails.css";
import { useSelector,useDispatch} from "react-redux";
import { fetchProduct } from "../redux/products/action";
import { useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";


export const ProductDetails = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.product.data);
    console.log(data);

    useEffect(() => {
        !data.length && dispatch(fetchProduct({"title": "36V 12.5Ah Removable Battery For ELEGLIDE M1 Plus / M1"}))
    }, [data])
    

    return (
        <div id="ProductDetailsPage">

            <div id="breadcrum">Home/
                Sports & Outdoors/

                E-Bikes, Scooters & Wheels/
                Electric Scooters</div>

            <div id="productPrimaryDiv">
                <div id="productPrimaryDivImg">
                    <img src={data[0]?.img} alt="" />
                </div>
                
                <div id="productPrimaryDivTitle">
                    <div id="title">{ data[0]?.title}</div>
                    <div id="review">
                        <div id="review1">
                            <p><BsFillStarFill style={{color:"gold",fontSize:"16px"}}/>{data[0]?.rating}</p>
                            <p>{data[0]?.rating_count} Reviews</p>
                        </div>
                        <div id="review2">0Answered Questions</div>
                        <p>Item Code:426552</p>
                    </div>
                    <div id="PriceDiv">
                        <h3>₹{data[0]?.price}</h3>
                        <p>₹{data[0]?.strick_of_price}</p>
                        <div id="OffDiv">{Math.floor((((data[0]?.strick_of_price * 1) - (data[0]?.price * 1)) / (data[0]?.strick_of_price * 1))*100)}% OFF</div>
                    </div>
                    <div id="newUser">
                        <p>2% OFF New User</p>
                        <h3>Get Coupons</h3>
                    </div>
                    <div id="shipDiv">
                        <div id="shipFrom">
                            <p>Ship from:</p>
                            <div id="shippingCountry">Europe-4</div>
                        </div>
                        <div id="qtyDiv">
                            <p>QTY:</p>
                            <div id="qty">
                                <p>-</p>
                                <h>1</h>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                    <div id="btnDiv">
                        <button>Add to Cart</button>
                        <button> Buy Now</button>
                        <p>Fav</p>
                    </div>
                    <div id="paymentDiv">
                        <div id="paypal">
                            <p>Payment:</p>
                            <div id="paypalImg"></div>
                        </div>
                        <div id="priceMatch">
                            <div>Price Match</div>
                            <div>Dropshipping Download</div>
                            <div>Bulk Order Rebate</div>
                        </div>
                        <div id="security">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

                <div id="productPrimaryDivAlsoView">
                    <p>People also viewed</p>
                    <div id="productPrimaryDivAlsoViewItem"></div>
                </div>
            </div>

            <div id="shareDiv">shareDiv</div>

            <div id="recommendedDiv">
                <h2>You May Also Like</h2>
            </div>

            <div id="ProductDescription">

                <div id="ProductDescriptionHeading">
                    <div id="ProductDescriptionHeadingDescription">Description</div>
                    <div id="ProductDescriptionHeadingReviews">Reviews</div>
                    <div id="ProductDescriptionHeadingQA">Q&A</div>
                </div>

                <div id="ProductDescriptionContent">
                    <div id="ProductDescriptionContentHIghLights"></div>
                    <div id="ProductDescriptionContentImages"></div>
                    <div id="ProductDescriptionContentSpec"></div>
                </div>
            </div>

            <div id="CustomerImage">
                <h2>Customer Photos</h2>
                <div>Be the first to <span>Upload</span> An Image of this product!</div>
            </div>

            <div id="CustomerVideo">
                <h2>Customer Videos</h2>
                <div>Be the first to <span>Upload</span> A Video of this product!</div>
            </div>

            <div id="CustomerReview">
                <h2>Customer Reviews</h2>
                <div id="CustomerReviewContent">
                    <div id="CustomerReviewStarDiv"></div>
                    <div id="CustomerReviewStatDiv"></div>
                    <div id="CustomerReviewButton">
                        <button>Write A Review</button>
                        <p>See all 6 reviews</p>
                    </div>
                </div>
            </div>
            
            <div id="CustomerComments">
                <div id="CustomerCommentsHeading"></div>
                <div id="CustomerCommentsContent"></div>
            </div>

            <div id="CustomerQuestionAnswer">
                <div id="CustomerQuestionAnswerHeading"></div>
                <div id="CustomerQuestionAnswerContent">
                    <p>Temporarily no discussion</p>
                    <button>Ask a Question</button>
                </div>
            </div>
        </div>
    )
}