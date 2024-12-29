import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bannerStyle.css';
import { GrFormNext, GrPrevious, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { Img, Box } from '@chakra-ui/react';
function FinalBanner() {

    const PreviousBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <h1 style={{ color: "black", fontSize: "45px" }}> <GrFormPrevious /> </h1>
            </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <Box className={className} onClick={onClick} display="none">
                <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}> <GrFormNext />  </h1>
            </Box>

        );
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PreviousBtn />,
        autoplaySpeed: 3000,
        nextArrow: <NextBtn />,
        dots: true
    };
    return (
        <Box>


            <Box  display={{ base: 'none', md: 'none', lg: 'block' }} className="fiximg" style={{ marginTop: "7px" }} height={{ base: '130px', md: '220px', lg: '300px' }} >
                <Slider  {...settings}
                >
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://www.lawpustak.com/cdn/shop/files/3.jpg?v=1732882344&width=1500" width={{ base: '100%', md: '100%', lg: '100em'}}alt="" />
                    </div>
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://hariomlawbooks.com/wp-content/uploads/2022/08/banner1-1.jpg" width={{ base: '100%', md: '100%', lg: '100em'}} alt="" />
                    </div>
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://allahabadlawagency.com/wp-content/uploads/2024/11/New-Allahabad-Banner-E-Book.png" width={{ base: '100%', md: '100%', lg: '100em'}} alt="" />
                    </div>
                    <div>
                        <Img height={{ base: '130px', md: '220px', lg: '280px' }} src="https://s3.amazonaws.com/ebcwebstore/images/large%20banner.png" width={{ base: '100%', md: '100%', lg: '100em'}} alt="" />
                    </div>

                </Slider>
            </Box>
            {/* mobile start  */}
            <Box className="fiximg" width={'100%'} style={{ marginTop: "20px" }} h="150px" display={{ base: 'block', md: 'none', lg: 'none' }} mb="50px">
                <Slider  {...settings}
                >
                    <div>
                        <Img src="https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150184563.jpg?t=st=1734691173~exp=1734694773~hmac=0552eda93624d12aed792775c38710bbe0ec536fb96cb605e6deb1b0f320f4f9&w=900" alt="" />
                    </div>
                    <div>
                        <Img src="https://s3.amazonaws.com/ebcwebstore/images/large%20banner.png" alt="" />
                    </div>
                    <div>
                        <Img src="https://kirtibook.in/static/media/books.f6da5e8d.jpg" alt="" />
                    </div>
                    <div>
                        <Img src="https://img.freepik.com/free-vector/flat-world-book-day-sale-horizontal-banner-template_23-2149330816.jpg" alt="" />
                    </div>
                    <div>
                        <Img src="https://img.freepik.com/free-vector/hand-drawn-literature-facebook-cover_23-2149720929.jpg" />
                    </div>

                </Slider>
            </Box>
            {/* mobile end */}
            {/* tab mode start  */}
            <Box className="fiximg" style={{ marginTop: "20px" }} h="150px" display={{ base: 'none', md: 'block', lg: 'none' }} mb="10px">
                <Slider  {...settings}
                >
                    <div>
                        <Img h="160px" src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c1fe2517e0386eb2.jpg?q=50" alt="" />
                    </div>
                    <div>
                        <Img h="160px" src="https://www.lawpustak.com/cdn/shop/files/3.jpg?v=1732882344&width=1500" alt="" />
                    </div>
                    <div>
                        <Img h="160px" src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/987721abe0687218.jpg?q=50" alt="" />
                    </div>
                    {/* <div>
                        <Img src="https://rukminim1.flixcart.com/fk-p-flap/1300/600/image/3e981015dd42dd8a.jpg?q=50" alt="" />
                    </div> */}

                </Slider>
            </Box>
            {/* tab mode end */}

        </Box>
    );
}

export default FinalBanner;