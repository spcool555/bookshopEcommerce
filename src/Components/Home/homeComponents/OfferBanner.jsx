import { Box, Img } from '@chakra-ui/react';
import React from 'react';

function OfferBanner() {
    return (
        <div>
            <Box p='6' boxShadow='xs' rounded='md' bg='white' display={{base:"none", md:"block", lg:"block"}} >

                <Img h={{ base: '40px', md: '70px', lg: '210px' }} w="56%" m="auto" mt="-20px" mb="-20px" src="https://t3.ftcdn.net/jpg/03/36/91/06/360_F_336910610_wIE5mklkMztDdFrvLTLh1YHH6V6jUj0G.jpg" alt="offerBanner" />
            </Box>
        </div>
    );
}

export default OfferBanner;