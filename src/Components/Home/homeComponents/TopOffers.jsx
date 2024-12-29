import React, { useEffect, useState } from 'react';
import { Box, Alert, SkeletonCircle, SkeletonText, AlertIcon, AlertTitle, AlertDescription, Button, Img, Text, WrapItem, Flex } from '@chakra-ui/react';
import './fashion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import { apiUrl } from '../../ApiUrl/ApiUrl';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

function TopOffers() {
    const [topOffers, settopOffers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
   
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
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const getFashion = () => {
        setLoading(true)
         fetch(`${apiUrl}/public/allbooks`)
            .then(res => res.json())
            .then(res => settopOffers(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getFashion();
    }, [])

    if (loading) {
        return (
            <>
                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='100' />
                    <SkeletonText mt='4' noOfLines={8} spacing='4' />
                </Box>
            </>
        )
    }
    if (error) {
        return (
            <><Alert status='error' w="70%" m="auto" textAlign={"center"}>
                <AlertIcon />
                <AlertTitle>Opps!</AlertTitle>
                <AlertDescription>Please Refresh and try again.</AlertDescription>
            </Alert>
            </>
        )
    }
    return (
        <Box display={"flex"} mt="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p='1' bg='white' >

            <Box w="25%" m="auto" textAlign={"center"} className="dealsBox">
                <Text paddingTop={{base:"120px", md:"120px", lg:"70px"}} fontSize={{ base: '10px', md: '20px', lg: '30px' }}>  Tax Law</Text>

                <WrapItem mt="30px">
                    <Button fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>VIEW ALL</Button>
                </WrapItem>
                <Img mt="2%" src="https://images.indianexpress.com/2022/02/income-tax-rules-1200.jpg?w=414" alt="fg" />

            </Box>
            <Box w={{ base: '80%', md: '75%', lg: '84%' }} m="auto" className="OffSlider">
            <Slider {...settings}>
                    {topOffers.filter(item=>item.catId===7).map(item =>
                    <NavLink to={`/products/view/${item.id}`} key={Date.now()+item.item_id+Math.random()}>
                        <Box m="5px" alignItems="center" textAlign={"center"} >
                        <Img maxWidth="210px" h="210px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.imagePath} alt="" />
                        <Text fontWeight="500" p="5px" fontSize={{base:"13px", md:"12px", lg:"14px"}}> {item.description}</Text>
                       <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                            <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                                                                                <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.descprice}</Text>
                                                                                <Text  fontSize={"12px"}><del> ₹ {item.originalprice}</del></Text>
                                                                              </Flex>
                                                                                                              </Flex>
                       
                              <Text fontWeight={"medium"} mt="8px" fontSize={{base:"13px", md:"14px", lg:"15px"}} color={"green"}>  Max {Math.round(((item.originalprice - item.descprice) / item.originalprice) * 100)}% Off
                                                                                </Text>
                                                                                                                  </Box>
                    </NavLink>
                    )}

                </Slider>
                </Box>
                {/* mobile version */}
                <Box display={{ base: 'block', md: 'none', lg: 'none' }} bg="orange" backgroundImage={"https://rukminim1.flixcart.com/fk-p-reco/850/200/images/Reco_BDS_e1c4ff.jpg?q=90"} p="10px"> 
                <Box mb="20px" mt="30px" alignItems={"center"} display="flex" justifyContent={"space-between"}> <Text fontSize={"19px"}>  Tax Law</Text> <Button size="sm" colorScheme='messenger'>View All</Button></Box>
                <Box className='itemGrid'display={{ base: 'grid', md: 'none', lg: 'none' }} >
                    
                    
                      {topOffers.filter(item=>item.catId===7).map((item, index) => 
                                       <NavLink to={`/products/view/${item.id}`} key={Date.now()+item.id+Math.random()}>
                                       <Box m="5px" borderRadius="6px" bg="white" alignItems="center" textAlign={"center"}  border="1px solid silver">
                                           <Img w="180px" h="190px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }}  p="10px" src={item.imagePath} alt="" />
                                           <Text fontWeight="700"> {item.booktitle}</Text>
                   
                      <Flex textAlign={"center"} justifyContent={'space-around'} w="50%" m="auto">
                                                                                  <Text fontSize={"15px"} fontWeight={"600"} >   ₹ {item.descprice}</Text>
                                                                                  <Text fontSize={"12px"}><del> ₹ {item.originalprice}</del></Text>
                                                                                                                                                     
                                                                              </Flex>   
                                                                                     <Text fontWeight={"medium"} mt="8px" fontSize={{base:"13px", md:"14px", lg:"15px"}} color={"green"}>Max {item.discount} % Off</Text>
                   
                                       </Box></NavLink>)}
                                       
                    
                </Box>
            </Box>
            {/* mobile version end */}
        </Box>

    );
}

export default TopOffers;