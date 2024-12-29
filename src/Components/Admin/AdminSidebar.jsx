
import React from 'react'

import {
  Box,
  Flex,
  Text,

  Button,
  VStack,

  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMenu, FiHome, FiSettings, FiUsers } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function AdminSidebar() {
      const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
         <Flex h="100vh" bg="gray.100">
              {/* Sidebar */}
              <Box
                as="nav"
                bg="white"
                w={{ base: 'full', md: '250px' }}
                h="full"
                borderRightWidth="1px"
                display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
              >
                <VStack align="stretch" p={4} spacing={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Admin Panel
                  </Text>
                  <Button as={Link} to="/admin" leftIcon={<FiHome />} variant="ghost">
                        Dashboard
                      </Button>
                      <Button as={Link} to="/admincategory" leftIcon={<FiUsers />} variant="ghost">
                       Category
                      </Button>
                      <Button as={Link} to="/adminproducts" leftIcon={<FiSettings />} variant="ghost">
                       Products
                      </Button>
                </VStack>
              </Box>
      
              {/* Mobile Drawer */}
              <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                  <Box
                    as="nav"
                    bg="white"
                    w="full"
                    h="full"
                    borderRightWidth="1px"
                    p={4}
                  >
                    <VStack align="stretch" spacing={4}>
                      <Text fontSize="lg" fontWeight="bold">
                        Admin Panel
                      </Text>
                      <Button as={Link} to="/admin" leftIcon={<FiHome />} variant="ghost">
                        Dashboard
                      </Button>
                      <Button as={Link} to="/admincategory" leftIcon={<FiUsers />} variant="ghost">
                       Category
                      </Button>
                      <Button as={Link} to="/adminproducts" leftIcon={<FiSettings />} variant="ghost">
                       Products
                      </Button>
                    </VStack>
                  </Box>
                </DrawerContent>
              </Drawer>
              </Flex>
    </div>
  )
}

export default AdminSidebar
