import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/carousel.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NewForYouCard, BestSellerProduct } from "../pages/home";


const PreviousBtn = (props) => {

    const { className, onClick } = props;
    
    return (
        <div className={className} onClick={onClick}>
            <IoIosArrowBack style={{ color: "white", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn1 = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{position:"relative", top:"-158px" ,left:"1100px"}}>
            <IoIosArrowForward style={{ color: "white", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn2 = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{ position: "relative", top: "-182px", left: "1450px" }}>
            <IoIosArrowForward style={{ color: "white", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn3 = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{ position: "absolute", top: "80px", left: "1450px" }}>
            <IoIosArrowForward style={{ color: "white", fontSize: "30px" }} />
        </div>
    );
};
const carouselProperties1 = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn1 />,
    slidesToShow: 4,
    slidesToScroll:1,
    // infinite={false}
    // slidesToScroll={3}
    centerMode: true,
    centerPadding: "170px",
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 4,
            },
        },
    ],
};
const carouselProperties2 = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn2 />,
    slidesToShow: 4,
    slidesToScroll: 1,
    // infinite={false}
    // slidesToScroll={3}
    centerMode: true,
    centerPadding: "170px",
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 4,
            },
        },
    ],
};
const carouselProperties3 = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn3 />,
    slidesToShow: 4,
    slidesToScroll: 1,
    // infinite={false}
    // slidesToScroll={3}
    centerMode: true,
    centerPadding: "170px",
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 4,
            },
        },
    ],
};

const MultiItemCarousel = (data) => {
    const slides = data.data
    console.log(data.data)
    return (
        <div  className="carousel" >
            <Slider {...carouselProperties1} style={{width:"1500px"}}>
                {slides.map((item) => (
                    // <Card item={item.img} />
                    <NewForYouCard image={item.img} title={item.title} price={item.price} key={ item.title} />
                ))}
            </Slider>
        </div>
    );
};
const BestSellerMultiItemCarousel = (data) => {
    const slides = data.data
    return (
        <div className="carousel" >
            <Slider {...carouselProperties2} style={{ width: "1500px" }}>
                {slides.map((item) => (
                    // <Card item={item.img} />
                    <BestSellerProduct image={item.img} title={item.title} price={item.price} key={item.title} strick_of_price={item.strick_of_price} rating_count={item.rating_count}  />
                ))}
            </Slider>
        </div>
    );
};
const RecommendedMultiItemCarousel = (data) => {
    const slides = data.data
    return (
        <div className="carousel" >
            <Slider {...carouselProperties3} style={{ width: "1500px" }}>
                {slides.map((item) => (
                    // <Card item={item.img} />
                    <div className="RecommendedProduct"  key={item.title}><img src={item.img} alt="" /></div>
                ))}
            </Slider>
        </div>
    );
};



export { MultiItemCarousel, BestSellerMultiItemCarousel,RecommendedMultiItemCarousel };