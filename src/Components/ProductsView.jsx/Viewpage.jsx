import React, { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, Grid, GridItem, HStack, Img, Input, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi'
import { IoMdShareAlt } from 'react-icons/io'
import { MdRestartAlt } from 'react-icons/md'
import { HiCurrencyRupee } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'
import './viewPage.css'
import { json, Link, useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Swal from 'sweetalert2';
import { apiUrl } from '../ApiUrl/ApiUrl';

function Viewpage() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
   
   
    const { SetCartData, carturl, getData } = useContext(CartContext)

    const { item_id } = useParams();

    const [viewData, setViewData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [item_id])
    const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await  fetch(`${apiUrl}/public/singleBook?bid=${item_id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // If the response is an object, not an array
            setViewData(Array.isArray(data) ? data : [data]);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return (
            <>

                <Stack>
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Stack>
            </>
        )
    }
    if (error) {
        return (
            <><Alert
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='500px'
            >
                <AlertIcon boxSize='40px' mr={0} />

                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Opps!
                </AlertTitle>
                <AlertDescription maxWidth='2xl'>
                    Thanks for Your Patience. Please Refresh.
                </AlertDescription>
            </Alert>
            </>
        )
    }
    const addDatainCart = () => {
        const uid = localStorage.getItem('uid');
         fetch(`${apiUrl}/public/addcart`, {
            method: "POST",
            body: JSON.stringify({ ...viewData[0], uid: uid}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            if (!res.ok) {
                // If the response is not ok, show an error alert
                return res.text().then((text) => {
                    throw new Error(text || "Failed to add item to cart");
                });
            }
            return res.json(); // Parse the response as JSON
        })
        .then((res) => {
       
            Swal.fire({
                title: 'Success!',
                text: 'Item successfully added to cart!',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            getData();
        })
        .catch((err) => {
            console.error("Error adding to cart:", err);
            Swal.fire({
                title: 'Error',
                text: `Error: ${err.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
            });   // Error alert with message from backend
        });
    };
    
    const handleAddToCart = () => {
        let uuid = localStorage.getItem('uid');
    
        if (uuid) {
            addDatainCart();
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Please login to add item to cart',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    
    const handleBuyNow = () => {
        addDatainCart()
    }


    // const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
    return (
        <div>
            <HStack p="10px" display={{ base: 'block', md: 'flex', lg: 'flex' }}>
                {viewData.map((item, index) => (
                    <Box key={index} w={{ base: '100%', md: '40%', lg: '40%' }} h={{ base: "100h", md: "100h", lg: "100h" }} >
                        <Box display={"flex"} p="15px">
                            <Box w="15%">
                                <Box display={{ base: "none", md: 'block', lg: "block" }} p='7px' border={"2px solid #2974F1"} m="auto" >
                                    <Img w={{ base: "0px", md: "30px", lg: "45px" }} m='auto' src={item.imagePath} alt="smallImg" />
                                </Box>
                            </Box>
                            <Box w="79%" p='10px' minH={'400px'} display='flex' justifyContent={'center'} alignItems={'center'} >
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Navneet Law Studios  project',
                                        isFluidWidth: true,
                                        src: `${item.imagePath}`,
                                        // border: "1px solid blue"
                                    },
                                    largeImage: {
                                        src: `${item.imagePath}`,
                                        width: 1200,
                                        height: 1800,
                                        // border: "1px solid blue"
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '200%',
                                        height: '100%',
                                        border: "1px solid blue"
                                    }
                                }}
                                />
                                {/* <Img  maxH={{base:"500px",md:"300px", lg:"100%"}} mw='450px' m='auto' src={item.image} /> */}
                            </Box>
                            <Box p='15px' h='53px' bg="white" borderRadius={'50%'} marginLeft="1px" shadow={'base'}  > <FaHeart color="silver" size="25px" /> </Box>
                        </Box>
                        <Flex pt='30px' pl="30px" display={{ base: 'none', md: 'block', lg: 'block' }} alignContent={"center"} justifyContent="space-around" w="100%" m="auto" color={"white"}  >

                            <Button alignItems={"center"}
                                size='md'
                                onClick={handleAddToCart}
                                height={{ base: '30px', md: '40px', lg: '55px' }}
                                width='45%'
                                bg="#FE9E00"
                                rounded='1px'
                                fontSize={{ base: '10px', md: '13px', lg: '18px' }}
                                _hover={{ backgroundColor: "#FE9E00" }}
                                mr="5px"
                            > <HiShoppingCart />
                                ADD TO CART
                            </Button>
                            <Link to='/cart'>
                                <Button
                                    size='md'
                                    onClick={handleBuyNow}
                                    height={{ base: '30px', md: '40px', lg: '55px' }}
                                    width='45%'
                                    bg="#FB641B"
                                    rounded='1px'
                                    fontSize={{ base: '10px', md: '13px', lg: '18px' }}
                                    _hover={{ backgroundColor: "#FB641B" }}
                                >
                                    <BsLightningCharge />
                                    BUY NOW
                                </Button>
                            </Link>
                        </Flex>

                        <Flex zIndex={100} display={{ base: 'block', md: 'none', lg: 'none' }}  bottom="0" alignContent={"center"} justifyContent="space-around" w="100%" m="auto" color={"white"} bg="white">
                            <Button alignItems={"center"}
                                size='md'
                                height="50px"
                                width='48%'
                                bg="white"
                                rounded='1px'
                                color={"black"}
                                fontSize="15px"
                                onClick={handleAddToCart}
                                _hover={{ backgroundColor: "#ffff" }}
                            >
                                ADD TO CART
                            </Button> 
                            <Link to='/cart'>
                            <Button
                                size='md'
                                height="50px"
                                width='48%'
                                bg="#FB641B"
                                rounded='1px'
                                fontSize="15px"
                                onClick={handleBuyNow}
                                _hover={{ backgroundColor: "#FB641B" }}
                            >

                                BUY NOW
                            </Button>
                            </Link>
                        </Flex>
                    </Box>

                ))}
                {viewData.map((item, index) => (
                    <Box key={index} w={{ base: '100%', md: '60%', lg: '60%' }} pt="-50px" h="100vh" overflow={{ base: "none", md: "auto", lg: "auto" }} pl="2%" className='example'>
                        <Box display={{ base: "none", md: "block", lg: "block" }} > <Text p="15px" display="flex" alignItems="center" float="right"> <IoMdShareAlt /> Share</Text></Box>
                        {/* <Box> <Text color={"silver"} > {item.booktitle} </Text></Box> */}
                        <Text fontWeight={"500"}> {item.booktitle}</Text>
                        <Text fontSize={"12px"} color="green"> Special price</Text>
                        <Box display={"flex"} alignItems="center" fontWeight={"500"} fontSize={"12px"}> <Text fontSize={"25px"} pr="10px"> ₹{item.descprice} </Text>  <Text pr="10px">  <del> ₹{item.originalprice} </del> </Text>  <Text pr="10px" color="green"> {item.discount}% Off</Text></Box>
                        <Box fontSize={{ base: '10px', md: '11px', lg: '15px' }} fontWeight={"500"} mb="15px" color={"#868786"} mt="8px" display="flex" alignItems="center" > <Box bg="green" color={"white"} pl="5px" pr="5px" display="flex" alignItems="center" borderRadius={"25px"} > {item.stars} <AiFillStar /></Box>
                            <Text pl="12px" pr="6px"> {item.ratings}</Text> 
              
                        </Box>

                        <Text> Copons for you</Text>
                        <Box display={"flex"} mb="5px" mt="5px" alignItems="center" fontSize={{ base: '8px', md: '10px', lg: '15px' }}> <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90" alt="small" /> Special Price₹100 off with cashback coupon on First Order <Text color={"#2974F1"} pl="5px">T&C </Text></Box>

                        <Text> Available offers</Text>
                        <Box fontSize={{ base: '8px', md: '10px', lg: '15px' }} mt="10px" mb="5px" display="flex" alignItems="center" >  <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" />Special PriceGet extra 22% off (price inclusive of cashback/coupon) <Text color={"#2974F1"} pl="5px"> T&C</Text> </Box>
                        <Box fontSize={{ base: '8px', md: '10px', lg: '15px' }} display={"flex"} mb="5px" alignItems="center" > <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" />Combo OfferBuy 2 items save 5%; Buy 3 or more save 10% <Text color={"#2974F1"} pl="10px"> See all productsT&C</Text> </Box>
                        {/* <Box fontSize={{ base: '8px', md: '10px', lg: '15px' }} display={"flex"} mb="5px" alignItems="center"> <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" /> Bank OfferTest - 10% off on HDFC Bank Cardless EMI, up to ₹500. On orders of ₹3000 and above</Box> */}
                        <br />
                        <br />
                        <Flex display={"flex"} justifyContent={"space-between"} fontSize={{ base: '8px', md: '10px', lg: '15px' }}>
                            {/* <Box>
                                <Box display={"flex"} mb="15px" alignItems="center"> <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                                    <Text> Deliver to</Text>
                                </Box>
                                <Box display="flex" alignItems={"center"} borderBottom="1px solid #2974F1"> <Input fontSize={{ base: '8px', md: '12px', lg: '15px' }} zIndex={"-1"} variant='unstyled' placeholder='Enter Delivery pincode' type="text" /> Check </Box>
                            </Box> */}
                            <Box>
                                <Text display={"flex"} mb="15px" alignItems="center"> <MdRestartAlt size="15px" color='#2974F1' /> 10 Days Return Policy</Text>
                                <Text display={"flex"} alignItems="center"> <HiCurrencyRupee size="15px" color='#2974F1' /> Cash on Delivery available</Text>
                            </Box>
                        </Flex>
                        <Box pt="20px" fontSize={"12px"}>  <Text>  Usually delivered in8 days</Text>
                            {/* <Text>  Enter pincode for exact delivery dates/charges</Text> */}
                        </Box>
                        {/* <Text color='#2974F1' pt={"10px"} fontSize={{ base: '8px', md: '10px', lg: '15px' }}> View Details</Text> */}
                        <Flex display={"flex"} width={{ base: '50%', md: '60%', lg: '30%' }} justifyContent="space-between" pt="10px" fontSize={"12px"}>
{/* 
                            <Box>
                                Seller
                            </Box> */}
                            <Box>
                                {/* <Box display={"flex"} alignItems="center">
                                    RetailNet
                                    <Flex ml="5px" bg='#2974F1' w="35px" color={"white"} alignItems="center" pr="5px" display="flex" pl="5px" borderRadius={"25px"} fontSize="11px"> {item.hidden_stars} <AiFillStar /></Flex>
                                </Box> */}


                                <Text>10 Days Return Policy </Text>
                                <Text> GST invoice available</Text>
                            </Box>
                        </Flex>

                        {/* <Img w={{ base: '200px', md: '280px', lg: '400px' }} p="20px" src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" /> */}
                        <Accordion defaultIndex={[0]} allowMultiple w="100%" p="0px" ml="-9px">


                            <AccordionItem bg="white">
                                <h1>
                                    <AccordionButton bg="white" pt={{ base: '15px', md: '20px', lg: '25px' }} pb={{ base: '15px', md: '20px', lg: '25px' }}>
                                        <Box flex='1' textAlign='left' fontSize={"20px"} >
                                            Product Details
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h1>
                                {viewData.map((item, index) => (
    <AccordionPanel key={index} pb={4}>
        <Grid  templateColumns="repeat(2, 1fr)"
  gap={[0, 6]} // No gap on small devices, 6 on larger devices
  fontSize={["11px", "12px"]} // Font size 8px on small devices, 12px on larger devices
  w="80%" >
            <GridItem>Author</GridItem>
            <GridItem>{item.author || 'N/A'}</GridItem>
            <GridItem>Format</GridItem>
            <GridItem>{item.format || 'N/A'}</GridItem>
            <GridItem>Pages</GridItem>
            <GridItem>{item.pagess || 'N/A'}</GridItem>
            <GridItem>Publisher</GridItem>
            <GridItem>{item.publisher || 'N/A'}</GridItem>
            <GridItem>Language</GridItem>
            <GridItem>{item.language || 'N/A'}</GridItem>
            <GridItem>ISBN</GridItem>
            <GridItem>{item.isbn || 'N/A'}</GridItem>
            <GridItem>Dimension</GridItem>
            <GridItem>{item.dimension || 'N/A'}</GridItem>
            <GridItem>Publisher Code</GridItem>
            <GridItem>{item.publishercode || 'N/A'}</GridItem>
            <GridItem>Added Date</GridItem>
            <GridItem>{item.dateadded || 'N/A'}</GridItem>
            <GridItem>Search Category</GridItem>
            <GridItem>{item.searchcategory || 'N/A'}</GridItem>
            <GridItem>Jurisdiction</GridItem>
            <GridItem>{item.jurisdiction || 'N/A'}</GridItem>
        </Grid>
    </AccordionPanel>
))}

                            </AccordionItem>
                        </Accordion>
{/* 
                        <Flex alignItems="center" justifyContent={"space-between"} pt="10px" pb="50px">
                            <Box fontSize={{ base: '8px', md: '15px', lg: '25px' }}>
                                <Text fontWeight={"500"}>  Ratings & Reviews</Text>
                            </Box>
                            <Box fontSize={{ base: '10px', md: '11px', lg: '15px' }} mb="15px" color={"#868786"} mt="8px" display="flex" alignItems="center" > <Box bg="green" color={"white"} pl="5px" pr="5px" display="flex" alignItems="center" borderRadius={"25px"} > {item.stars} <AiFillStar /></Box>
                                <Text pl="2px" pr="2px"> {item.ratings}</Text> <Text> and </Text> <Text pl="2px" pr="2px"> {item.reviews}</Text>
                            </Box>
                            <Box>
                                <Button bg='#2974F1' color={"white"} pos=''
                                    fontSize={{ base: '8px', md: '11px', lg: '15px' }} h={{ base: '18px', md: '30px', lg: '40px' }} _hover={{ bg: "#2974F1" }}>
                                    Rate Product</Button>
                            </Box>
                        </Flex> */}
                    </Box>
                ))}
            </HStack>
        </div>
    );
}

export default Viewpage;