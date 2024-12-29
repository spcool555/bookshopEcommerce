import { Box, Img, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

function BannerOffer2() {
    return (
        <div>
            <Box m="15px" display={{base:"none", md:"block", lg:"block"}}>
                <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
                   
                    <Box>
                        <Img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVnYWwlMjA0ODB4NDgwfGVufDB8MHwwfHx8Mg%3D%3D" />
                    </Box>
                    <Box>
                        <Img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlZ2FsJTIwNDgweDQ4MHxlbnwwfDB8MHx8fDI%3D" />
                    </Box>
                    <Box>
                        <Img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVnYWwlMjA0ODB4NDgwfGVufDB8MHwwfHx8Mg%3D%3D" />
                    </Box>
                </SimpleGrid>
            </Box>
        </div>
    );
}

export default BannerOffer2;