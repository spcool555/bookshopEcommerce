import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import AdminSidebar from './AdminSidebar';
import { apiUrl } from '../ApiUrl/ApiUrl';
import { Select } from 'chakra-react-select';

function AdminProducts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageFile, setImageFile] = useState(null);
  const [categoriess, setCategoriess] = useState([]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Add the file to the FormData object
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const productData = {
      booktitle: formData.get('booktitle'),
      author: formData.get('author'),
      description: formData.get('description'),
      originalprice: formData.get('originalprice'),
      descprice: formData.get('descprice'),
      format: formData.get('format'),
      pagess: formData.get('pagess'),
      publisher: formData.get('publisher'),
      language: formData.get('language'),
      isbn: formData.get('isbn'),
      dimension: formData.get('dimension'),
      publishercode: formData.get('publishercode'),
      dateadded: formData.get('dateadded'),
      jurisdiction: formData.get('jurisdiction'),
      category: formData.get('category'),
    };

    try {
      const response = await fetch(`${apiUrl}/public/savebook`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Product added successfully!');
        e.target.reset();
        setImageFile(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  
  useEffect(() => {
    fetch(`${apiUrl}/public/allCategories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched categories:', data); // Check the output here
        setCategoriess(data);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);
  


  return (
    <Flex h="100%" bg="gray.100">
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
            Product Management
          </Text>
        </Flex>

        {/* Form Section */}
        <Box bg="white" p={6} borderRadius="md" shadow="sm">
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Add New Product
          </Text>
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <VStack spacing={4} align="stretch">
              <FormControl id="booktitle" isRequired>
                <FormLabel>Book Title</FormLabel>
                <Input type="text" placeholder="Enter book title" name="booktitle" />
              </FormControl>
              <FormControl id="author" isRequired>
                <FormLabel>Author</FormLabel>
                <Input type="text" placeholder="Enter author name" name="author" />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Input type="text" placeholder="Enter description" name="description" />
              </FormControl>
              <FormControl id="image" isRequired>
                <FormLabel>Upload Image</FormLabel>
                <Input
                  type="file"
                  name="imageFile"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </FormControl>
              <FormControl id="originalprice" isRequired>
                <FormLabel>Original Price</FormLabel>
                <Input type="number" placeholder="Enter original price" name="originalprice" />
              </FormControl>
              <FormControl id="descprice" isRequired>
                <FormLabel>Discounted Price</FormLabel>
                <Input type="number" placeholder="Enter discounted price" name="descprice" />
              </FormControl>
              <FormControl id="format" isRequired>
                <FormLabel>Format</FormLabel>
                <Input type="text" placeholder="Enter Format" name="format" />
              </FormControl>
              <FormControl id="pages" isRequired>
                <FormLabel>Pages</FormLabel>
                <Input type="text" placeholder="Enter Pages" name="pagess" />
              </FormControl>
              <FormControl id="publisher" isRequired>
                <FormLabel>Puublisher Name</FormLabel>
                <Input type="text" placeholder="Enter Publisher Name" name="publisher" />
              </FormControl>
              <FormControl id="language" isRequired>
                <FormLabel>Book Language</FormLabel>
                <Input type="text" placeholder="Enter Book Language" name="language" />
              </FormControl>
              <FormControl id="isbn" isRequired>
                <FormLabel>ISBN</FormLabel>
                <Input type="text" placeholder="Enter ISBN" name="isbn" />
              </FormControl>
              <FormControl id="dimension" isRequired>
                <FormLabel>Dimension</FormLabel>
                <Input type="text" placeholder="Enter Dimension" name="dimension" />
              </FormControl>
              <FormControl id="publishercode" isRequired>
                <FormLabel>Publisher Code</FormLabel>
                <Input type="text" placeholder="Enter Publisher Code" name="publishercode" />
              </FormControl>
              <FormControl id="category" isRequired>
  <FormLabel>Select Category</FormLabel>
  <select  name="category">
    <option >Select Categories</option>
    {categoriess.length > 0 ? (
      categoriess.map((categorys) => (
        <option key={categorys.catId} value={categorys.catId}>
          {categorys.catName}
        </option>
      ))
    ) : (
      <option value="">No categories available</option>
    )}
  </select>
</FormControl>
              <FormControl id="jurisdiction" isRequired>
                <FormLabel>Add Jurisdiction</FormLabel>
                <Input type="text" placeholder="Enter Jurisdiction" name="jurisdiction" />
              </FormControl>
             



              {/* Add other fields like format, pages, publisher, etc., in a similar manner */}
              <Button type="submit" colorScheme="teal" width="full">
                Add Product
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default AdminProducts;
