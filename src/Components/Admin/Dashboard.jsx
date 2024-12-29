import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMenu} from 'react-icons/fi';
import AdminSidebar from './AdminSidebar';



function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
   
      <Flex h="100vh" bg="gray.100">
        {/* Sidebar */}
   
<AdminSidebar />
        {/* Content Area */}
        <Box flex="1" p={4}>
          {/* Header */}
          <Flex justify="space-between" align="center" bg="white" p={4} mb={4} borderRadius="md" shadow="sm">
            <IconButton
              icon={<FiMenu />}
              aria-label="Open menu"
              display={{ base: 'block', md: 'none' }}
              onClick={onOpen}
            />
            <Text fontSize="xl" fontWeight="bold">
              Admin Panel
            </Text>
          </Flex>

        
        </Box>
      </Flex>
  
  );
}

export default Dashboard;
