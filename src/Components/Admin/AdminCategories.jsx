import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import AdminSidebar from './AdminSidebar';
import { apiUrl } from '../ApiUrl/ApiUrl';

function AdminCategories() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const categoryName = e.target.categoryName.value;
  
    try {
      const response = await fetch(`${apiUrl}/public/saveCategories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ catName: categoryName }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(`Category "${data.catName}" has been successfully added!`);
        e.target.reset();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding category:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  

  return (
    <Flex h="100vh" bg="gray.100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Content Area */}
      <Box flex="1" p={4}>
        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          bg="white"
          p={4}
          mb={4}
          borderRadius="md"
          shadow="sm"
        >
          <IconButton
            icon={<FiMenu />}
            aria-label="Open menu"
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}
          />
          <Text fontSize="xl" fontWeight="bold">
            Categories Management
          </Text>
        </Flex>

        {/* Form Section */}
        <Box bg="white" p={6} borderRadius="md" shadow="sm">
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Add New Category
          </Text>
          <form onSubmit={handleFormSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl id="categoryName" isRequired>
                <FormLabel>Category Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter category name"
                  name="categoryName"
                />
              </FormControl>
              <Button type="submit" colorScheme="teal" width="full">
                Add Category
              </Button>
            </VStack>
          </form>
        </Box>
        <Box mt={6}>
          <img 
            src="https://navneetlawstudio.store/images/cf546227-d61b-4e26-ba29-49a5e696e209_qr-code.png" 
            alt="QR Code"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
        </Flex>
  );
}

export default AdminCategories;
