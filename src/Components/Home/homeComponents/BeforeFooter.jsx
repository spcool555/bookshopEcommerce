import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function BeforeFooter() {
    return (
        <div> <hr />
            <Box p="25px" bg="#FFFFFF" color={"#757171"} borderTop="2px solid silver" display={{base:"none", md:"block", lg:"block"}}>
                <Text fontSize={"16px"} pb="9px" fontWeight={"bold"}>    Navneet Law Studios: The One-stop Shopping Destination</Text>
                <Text fontSize={"12px"} pb="9px">   E-commerce is revolutionizing the way we all access information and resources in India. Why hop from one bookstore to another in search of the latest law books when you can find them on the Internet with a single click? Not just legal texts—Navneet Law Studios houses everything a law student, practicing advocate, or legal enthusiast might need. From comprehensive commentaries on constitutional law, criminal law, and civil procedure to concise guides for judiciary and competitive exams; from books on corporate and intellectual property law to publications on environmental law and human rights, we’ve got it all covered. Whether you are looking for classic legal texts, recent amendments, case law references, or law dictionaries, you can rest assured you’ll find them here. For those of you juggling court schedules, classes, or a busy work-life balance, Navneet Law Studios is your ultimate destination. Shop at your convenience, any time of the day or night. This platform never shuts down.
                </Text>
                <Text fontSize={"12px"} pb="9px">  What’s more, with our year-round offers and discounts, our prices are unbeatable. You’re bound to pick up more books than you planned. Still wondering why you should shop from Navneet Law Studios when there are other options available? Let us answer that for you.
                </Text>
               
               
                <Text fontSize={"16px"} pb="9px" fontWeight={"bold"}>
                     Debit Cards & Credit Card Accepted
                </Text>
                <Text fontSize={"12px"} pb="9px">

                We accept all major debit and credit cards to make your shopping experience seamless and hassle-free. Enjoy secure transactions with your preferred payment method.
                </Text>
            
                
                
            </Box>
        </div>
    );
}

export default BeforeFooter;