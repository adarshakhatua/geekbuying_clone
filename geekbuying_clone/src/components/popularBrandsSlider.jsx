import React from 'react';
import {
    Box,
    useBreakpointValue,
    Container,
    Flex,
    Center,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
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

export default function BrandSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null);
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
                'https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg',
        },
        {
            title: 'Design Projects 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg',
        }
    ];

    return (
        <Box
            position={'relative'}
            height={'260px'}
            width={'full'}
            borderRadius={"5px"}
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
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        top={"-447px"}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="contain"
                        backgroundImage={`url(${card.image})`}>
                        {/* This is the block you need to change, to customize the caption */}
                        <Container size="container.lg" height="600px" position="relative">
                            {/*Sliding Pointer*/}
                            <Flex
                                margin={"auto"}
                                h={"30px"}
                                position={"relative"}
                                zIndex={4}
                                top={"670px"}
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
                                        bgColor={(index === indx) ? "#0066FF" : "white"}
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