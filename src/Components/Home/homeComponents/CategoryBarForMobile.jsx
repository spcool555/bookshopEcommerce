import React from 'react';
import { Box, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
function CategoryBarForMobile() {
    var data = [
        {
            image: "https://saptakala.com/books/admin/imgbook/Saptakala-Real-Estate-Law-Journal.jpg",
            title: "Journals",
            page:"products/grocery"
           
        },
        {
            image: "https://png.pngtree.com/png-vector/20231120/ourmid/pngtree-lawyer-man-portrait-cut-out-png-image_10578315.png",
            title: "Lawyers",
            page:"/products/mobiles"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_Y5GEUPXTZGq-9fJc38yqFZZah5DMAZmKA&s",
            title: "Students",
            page:"/products/electronics"
        },
        {
            image: "https://edzorblaw.com/wp-content/uploads/2024/08/image-45.png",
            title: "Bare Acts",
            page:"/products/appliances"
        },
        {

            image: "https://i.pinimg.com/736x/da/be/71/dabe71905fb09245522c2797d1c49e3c.jpg",
            title: "eBooks",
            page:"/products/fashion"
        }, {
            image: "https://png.pngtree.com/png-clipart/20231115/original/pngtree-e-learning-icon-e-learning-icon-photo-png-image_13562191.png",
            title: "eLearn",
            page:"/"
        }
        ,
        {
            image: "https://img.pikbest.com/png-images/cartoon-drawing-gold-coin-tax-computer-illustration_5877739.png!f305cw",
            title: "Tax",
            page:"/products/home"
        }
        ,
        {
            image: "https://img.freepik.com/premium-vector/vector-design-global-law-icon-style_1250006-33481.jpg",
            title: "Global",
            page:"/products/appliances"
        },
        {
            image: "https://png.pngtree.com/png-vector/20210805/ourmid/pngtree-new-release-sign-png-image_3778527.jpg",
            title: "New Realeases",
            page:"/"
        },
        {
            image: "https://png.pngtree.com/recommend-works/png-clipart/20241011/ourmid/pngtree-3d-gavel-with-right-sign-law-and-justice-concept-png-image_14075430.png",
            title: "Recommended",
            page:"products/grocery"
        }
    ]
    return (
        <div>
             <Box boxShadow="2xl" display={{base:"block", md:"none", lg:"none"}} bg="white" color={"black"}>
            <Grid p="20px" textAlign={"center"} templateColumns='repeat(5, 1fr)' m="auto"  >
                {
                    data.map((ele, index) => (
                        <NavLink key={Date.now()+index+Math.random()} to={ele.page}>
                        <GridItem _hover={{color:"#2874F0"}} fontSize={{base:"10px", md:"13px", lg:"14px"}} >
                            <Box > <Img src={ele.image} alt=""  height={{base:"60px", md:"60px", lg:"70px"}} m="auto" />
                             <Text> {ele.title}</Text>
                            </Box>
                           
                        </GridItem>
                        </NavLink>

                    ))
                }
            </Grid>
            <Img src="https://t3.ftcdn.net/jpg/03/36/91/06/360_F_336910610_wIE5mklkMztDdFrvLTLh1YHH6V6jUj0G.jpg"/>
        </Box>

        </div>
    );
}

export default CategoryBarForMobile;