// import React, { Component } from "react";
// import Slider from "react-slick";
// import { NewForYouCard } from "../pages/home";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../style/productSlider.css";
// import { useDispatch, useSelector } from "react-redux";

// class ProductSlider extends Component {
    
//     constructor() {
//         super();
//         this.state = {
            
            // slides: [
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-White-501646-0._w280_p1_.jpg",
            //         title:"GREEN TIME K1 Pro Alarm Clock Radio, LCD Temperature Display,",
            //         price:"2415.00",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights: [],
            //             specification: {eneral: [],
            //                 spec: [],
            //                 weight_dimension: [],
            //                 package_content:[]
            //             }
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-06-07/C127-RC-Helicopter-2-4G-4CH-6-Axis-Gyro-720P-Camera-with-Remote-Contro-501582-0._w280_p1_.jpg",
            //         title:"8Bitdo USB Wireless Adapter Bluetooth 4.0 Compatible with Switch,",
            //         price:"1368.15",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-06-06/8BitDo-USB-Wireless-Adapter-2-501568-0._w280_p1_.jpg",
            //         title:"Roborock S7/S7 MAXV Plus Auto-Empty Dock Automatic Suction Station",
            //         price:"2656.58",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-06-09/XNANO-X1-Android-9-0-LCD-Projector-8K-4K-Dolby-460ANSI--5G-WIFI-501672-0._w280_p1_.jpg",
            //         title:"3PCS Dust Bag for Roborock Q7 MAX+/S7 MAXV Ultra Automatic",
            //         price:"1207.10",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-K1-Pro-Alarm-Clock-Radio-White-501648-0._w280_p1_.jpg",
            //         title:"Storage Bag for GPD Win 3 Handheld Game Console",
            //         price:"884.99",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-03-25/Videyt-AX-T0601-Custom-Keyboard-6-Keys-DIY-Keyboard-498357-0._w280_p1_.jpg",
            //         title:"GREEN TIME T11 Multifunction Wireless Charging Bluetooth 5.0",
            //         price:"3703.43",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-03-24/Earbuds-Cleaning-Pen-for-Headphones-Airpods-498286-0._w280_p1_.jpg",
            //         title:"Mini Wireless Camera Real 1080P Wifi Camera Home Nanny Tiny Cam Baby",
            //         price:"1207.10",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-M7-QI-Bluetooth-Alarm-Clock-Speaker-Black-501618-0._w280_p1_.jpg",
            //         title:"GREEN TIME X7 Wireless Fast Charger Alarm Clock Radio, LED",
            //         price:"3461.85",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-05-28/Ortur-Laser-Module-LU2-10A-24V-10W-501387-2._w280_p1_.jpg",
            //         title:"Sabbat E18 TWS Earbuds Wireless Bluetooth 5.2 Music and Gaming",
            //         price:"5636.07",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     },
            //     {
            //         img: "https://img.gkbcdn.com/p/2022-04-29/C2-WIFI-Hidden-Camera-Wireless-Network-Security-Surveillance-Camera-500067-0._w280_p1_.jpg",
            //         title:"Creality Heating Block Kit-High Temperature Pro for Ender-3 S1/",
            //         price:"2012.36",
            //         strick_of_price:"",
            //         rating:"",
            //         rating_count:"",
            //         brand:"",
            //         tag:"",
            //         description:{
            //             images:[],
            //             heighlights:[]
            //         },
            //     }
            // ]
//         };
//     }
//     render() {
//         var settings = {
//             dots: false,
//             infinite: false,
//             speed: 500,
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             initialSlide: 0,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 3,
//                         infinite: true,
//                         dots: true
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 2,
//                         initialSlide: 2
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 2
//                     }
//                 }
//             ]
            
//         };
       
//         return (
//             <div id="productSlider1">
//                 <Slider {...settings}>
//                     {this.state.slides.map((slide, index) => {
//                         return (
//                             <div key={index}>
//                                 <NewForYouCard image={slide.img} title={slide.title} price={slide.price} />
//                                 {/* <img src={slide.img} alt={`slide${index}`} /> */}
//                             </div>
//                         );
//                     })}
//                 </Slider>
//             </div>
//         );
//     }
// }

// export default ProductSlider;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/carousel.css";
// import { data, multiData } from "./data";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NewForYouCard } from "../pages/home";


const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    
    return (
        <div className={className} onClick={onClick}>
            <IoIosArrowBack style={{ color: "white", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{position:"relative", top:"-158px" ,left:"1100px"}}>
            <IoIosArrowForward style={{ color: "white", fontSize: "30px" }} />
        </div>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 4,
    slidesToScroll:4,
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

const MultiItemCarousel = () => {
    const slides = [
        {
            img: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-White-501646-0._w280_p1_.jpg",
            title: "GREEN TIME K1 Pro Alarm Clock Radio, LCD Temperature Display,",
            price: "2415.00",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: [],
                specification: {
                    eneral: [],
                    spec: [],
                    weight_dimension: [],
                    package_content: []
                }
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-06-07/C127-RC-Helicopter-2-4G-4CH-6-Axis-Gyro-720P-Camera-with-Remote-Contro-501582-0._w280_p1_.jpg",
            title: "8Bitdo USB Wireless Adapter Bluetooth 4.0 Compatible with Switch,",
            price: "1368.15",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-06-06/8BitDo-USB-Wireless-Adapter-2-501568-0._w280_p1_.jpg",
            title: "Roborock S7/S7 MAXV Plus Auto-Empty Dock Automatic Suction Station",
            price: "2656.58",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-06-09/XNANO-X1-Android-9-0-LCD-Projector-8K-4K-Dolby-460ANSI--5G-WIFI-501672-0._w280_p1_.jpg",
            title: "3PCS Dust Bag for Roborock Q7 MAX+/S7 MAXV Ultra Automatic",
            price: "1207.10",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-K1-Pro-Alarm-Clock-Radio-White-501648-0._w280_p1_.jpg",
            title: "Storage Bag for GPD Win 3 Handheld Game Console",
            price: "884.99",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-03-25/Videyt-AX-T0601-Custom-Keyboard-6-Keys-DIY-Keyboard-498357-0._w280_p1_.jpg",
            title: "GREEN TIME T11 Multifunction Wireless Charging Bluetooth 5.0",
            price: "3703.43",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-03-24/Earbuds-Cleaning-Pen-for-Headphones-Airpods-498286-0._w280_p1_.jpg",
            title: "Mini Wireless Camera Real 1080P Wifi Camera Home Nanny Tiny Cam Baby",
            price: "1207.10",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-M7-QI-Bluetooth-Alarm-Clock-Speaker-Black-501618-0._w280_p1_.jpg",
            title: "GREEN TIME X7 Wireless Fast Charger Alarm Clock Radio, LED",
            price: "3461.85",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-05-28/Ortur-Laser-Module-LU2-10A-24V-10W-501387-2._w280_p1_.jpg",
            title: "Sabbat E18 TWS Earbuds Wireless Bluetooth 5.2 Music and Gaming",
            price: "5636.07",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        },
        {
            img: "https://img.gkbcdn.com/p/2022-04-29/C2-WIFI-Hidden-Camera-Wireless-Network-Security-Surveillance-Camera-500067-0._w280_p1_.jpg",
            title: "Creality Heating Block Kit-High Temperature Pro for Ender-3 S1/",
            price: "2012.36",
            strick_of_price: "",
            rating: "",
            rating_count: "",
            brand: "",
            tag: "",
            description: {
                images: [],
                heighlights: []
            },
        }
    ]
    return (
        <div  className="carousel" >
            <Slider {...carouselProperties} style={{width:"1500px"}}>
                {slides.map((item) => (
                    // <Card item={item.img} />
                    <NewForYouCard image={item.img} title={item.title} price={item.price} />
                ))}
            </Slider>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <img
                className="multi__image"
                src={item}
                alt=""
                style={{
                    width: "100%",
                    height: "170px",
                    objectFit: "contain",
                    marginBottom: "10px",
                }}
            />
            <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
            <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
                From ₹ 7,000
            </p>
            <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
                Up To ₹ 5,000 Off on HDFC
            </p>
        </div>
    );
};

export default MultiItemCarousel;