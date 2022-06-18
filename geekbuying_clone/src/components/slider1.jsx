import React, { useState } from 'react';
import {
    Box,
    useBreakpointValue,
    Container,
    Flex,
    Center,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState (null);
    const [arrow, setArrow] = useState(false);
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Design Projects 1',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62a832772b40c920d48b90e3._p1_.jpg',
        },
        {
            title: 'Design Projects 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62a890272b40c929fc3f02e7._p1_.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62ab078c2b40c919f4d36c18._p1_.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62a8904e2b40c929fc3f02e8._p1_.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62a8912a2b40c929fc3f02eb._p1_.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62a8906f2b40c929fc3f02e9._p1_.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2206/740x670-62a890bf2b40c929fc3f02ea._p1_.jpg',
        }
    ];

    return (
        <Box
            position={'relative'}
            height={'670px'}
            width={'740px'}
            borderRadius={"5px"}
            onMouseEnter={() => {setArrow(true) }}
            onMouseLeave={() => {setArrow(false) }}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            {arrow?<><Flex
                aria-label="left-arrow"
                position="absolute"
                left={side}
                top={top}
                zIndex={2}
                bgColor={"#3e3d3d79"}
                color="white"
                h={"45px"}
                w={"45px"}    
                borderRadius={"50%"}
                justify={"flex-start"}
                align={"center"}
                onClick={() => slider?.slickPrev()}>
                <IoIosArrowBack size="40px"/>
            </Flex>
            {/* Right Icon */}
            <Flex
                aria-label="right-arrow"
                position="absolute"
                right={side}
                top={top}
                zIndex={2}
                bgColor={"#3e3d3d79"}
                color="white"
                h={"45px"}
                w={"45px"}
                borderRadius={"50%"}
                justify={"flex-end"}
                align={"center"}
                onClick={() => slider?.slickNext()}>
                <IoIosArrowForward size="40px" />
                </Flex></> : null}

            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        top={"-244px"}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="contain"
                        backgroundImage={`url(${card.image})`}>
                        {/* This is the block you need to change, to customize the caption */}
                        <Container size="container.lg" height="600px" position="relative">
                            {/*Sliding Pointer*/}
                            <Flex
                                // border={"1px solid black"}
                                margin={"auto"}
                                h={"30px"}
                                // w={"300px"}
                                position={"relative"}
                                zIndex={4}
                                top={"870px"}
                                justify={"center"}
                                align={"center"}
                                >

                                {cards.map((item, indx) =>
                                    <Center key={indx}
                                        // border={"1px solid #0066FF"}
                                        h={"15px"}
                                        w={"15px"}
                                        borderRadius={"50%"}
                                        m={"5px"}
                                        bgColor={(index === indx) ?"#0066FF":"white"}
                                    >
                                    </Center>)}

                            </Flex>

                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}