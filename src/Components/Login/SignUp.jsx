import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Login } from './Login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Alert, AlertIcon, AlertTitle, position, useMediaQuery } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Image,
  FormControl,
  Input,
  FormLabel,
  Link,
} from '@chakra-ui/react'
import { Authcontext } from '../Context/Authcontext'
import { apiUrl } from '../ApiUrl/ApiUrl'
export function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const initialvalues = { name: '', username: '', password: '' }
  const [inputValues, setInputValues] = useState(initialvalues)
  const [error, setError] = useState({})
  const [isAuth, setIsAuth] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
    const [incorrect, setIncorrect] = useState(0)
  // let loginsetName = JSON.parse(localStorage.getItem("loginsetName")) || "Login"
 let localName =  localStorage.getItem("loginsetName");
  const [name, setName] = useState(localName)
  var flag = false
  const { correct, setCorrect } = useContext(Authcontext)
 
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')

  const handleChange = (inp) => {

    const { name, value } = inp.target
    setInputValues({ ...inputValues, [name]: value })
    // console.log(inputValues);
  }

  const handleSignup = (body) => {

       fetch(`${apiUrl}/auth/register`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((res) => {
            // Check if uname and token are present in the response body
            if (res.body && res.body.uname && res.body.token && res.body.name && res.body.uid) {
              notify(); // Assuming this function displays a success message
              setName(res.body.name); // Set the uname from response
              localStorage.setItem("loginsetName", res.body.name);
              localStorage.setItem("token", res.body.token); // Save token to localStorage
            localStorage.setItem("uid", res.body.uid); // Save uid to localStorage
            setIncorrect(false); // Reset incorrect state on successful login
    window.location.reload();
            } else {
              setIncorrect(true); // Set incorrect state on failed login
              check(); // Assuming check is your error handler
            }
          })
            .catch(() => setIsAuth(false))
        } 

  const notify = () => {
    setCorrect(true)
    setIncorrect(false)
    toast('login SuccesFully', {
      position: 'top-center',
    })
    setIsAuth('')
    onClose()
  }


  const check = () => {
    toast.error('Already Exist', {
      position: 'top-center',
      autoClose: "1000"
    })
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (values.username == '') {
      errors.username = 'username is required'
    } else if (!regex.test(values.username)) {
      errors.username = 'Enter a valid username'
    }
    if (values.password == '') {
      errors.password = 'password is required'
    } else if (values.password.length < 6) {
      errors.password = 'password must not be less than 6 character'
    } else {
      handleSignup(values)
    }
    return errors
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(inputValues))
    setIsSubmit(true)
    setInputValues(initialvalues)
  }

  return (
    <>
      <Button
        _hover={{ bg: 'white' }}
        fontWeight="400"
        marginBottom="2"
        bg="white"
        textAlign="center"
        onClick={onOpen}
      >
        Signup
      </Button>
      {
        isLargerThan720 ?

          <Modal
            SignupRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            padding="0px"
          >
            <ModalOverlay />

            <ModalContent>
              <ModalBody padding="-1.5">
                <ToastContainer />
                <ModalCloseButton
                  size="lg"
                  color="white"
                  marginRight="-3.5rem"
                  marginTop="-4"
                />
                <div style={{ display: 'flex' }}>
                  <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                    <Text fontWeight="600" color="white" fontSize="2xl">
                      Looks like you're new here!
                    </Text>
                    <Text
                      fontWeight="600"
                      marginTop="15px"
                      color="#Dbdbdb"
                      fontSize="1xl"
                    >
                      Sign up with your username
                      <br /> address to get started
                    </Text>
                    <Image
                      marginTop="10rem"
                      src="logo.webp"
                      alt="image"
                    />
                  </Box>
                  <Box height="32rem" padding="35" width="24rem" color="#878787">
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="name"
                        variant="flushed"
                        placeholder="Enter Name"
                        value={inputValues.name}
                        onChange={handleChange}
                        required
                      />
                      <FormLabel pt={'20px'}>Email  address</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="username"
                        variant="flushed"
                        placeholder="Enter Email"
                        value={inputValues.username}
                        onChange={handleChange}
                        required
                      />
                      <Text color="red" fontSize="xs">
                        {error.username}
                      </Text>
                      <FormLabel marginTop="5">Password</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        type='password'
                        name="password"
                        variant="flushed"
                        placeholder="Enter Password"
                        value={inputValues.password}
                        onChange={handleChange}
                        required
                      />
                      <Text color="red" fontSize="xs">
                        {error.password}
                      </Text>

                      <Text marginTop="7" fontSize="xs">
                        By continuing, you agree to Navneet Law Studios's{' '}
                        <Link color="#2f74f0" href="">
                          Terms of Use{' '}
                        </Link>
                        and{' '}
                        <Link color="#2f74f0" href="">
                          Privacy Policy.
                        </Link>
                      </Text>

                      <Button
                        onClick={handleSubmit}
                        borderRadius="0.5"
                        marginTop="4"
                        padding="6"
                        color="white"
                        bg="#fb641b"
                        width="19.7rem"
                      >
                        CONTINUE
                      </Button>
                      <Button
                        marginTop="4"
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="#fff"
                        width="19.7rem"
                        _hover={'#fff'}
                      >
                        Existing User?{<Login />}
                      </Button>
                    </FormControl>
                  </Box>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
          :
          <Modal
            SignupRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            padding="0px"
          >
            <ModalOverlay />

            <ModalContent>
              <ModalBody padding="-1.5">
                {/* <ToastContainer />
                <ModalCloseButton
                  size="lg"
                  color="white"
                  marginRight="-3.5rem"
                  marginTop="-4"
                /> */}

                <Box height="32rem" padding="25" width="19rem" color="#878787" margin={'auto'}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      color="black"
                      marginTop="-3"
                      name="name"
                      variant="flushed"
                      placeholder="Enter Name"
                      value={inputValues.name}
                      onChange={handleChange}
                      required
                    />
                    <FormLabel pt={'20px'}>username address</FormLabel>
                    <Input
                      color="black"
                      marginTop="-3"
                      name="username"
                      variant="flushed"
                      placeholder="Enter username"
                      value={inputValues.username}
                      onChange={handleChange}
                      required
                    />
                    <Text color="red" fontSize="xs">
                      {error.username}
                    </Text>
                    <FormLabel marginTop="5">Password</FormLabel>
                    <Input
                      color="black"
                      marginTop="-3"
                      type='password'
                      name="password"
                      variant="flushed"
                      placeholder="Enter Password"
                      value={inputValues.password}
                      onChange={handleChange}
                      required
                    />
                    <Text color="red" fontSize="xs">
                      {error.password}
                    </Text>

                    <Text marginTop="7" fontSize="xs">
                      By continuing, you agree to Navneet Law Studios's{' '}
                      <Link color="#2f74f0" href="">
                        Terms of Use{' '}
                      </Link>
                      and{' '}
                      <Link color="#2f74f0" href="">
                        Privacy Policy.
                      </Link>
                    </Text>

                    <Button
                      onClick={handleSubmit}
                      borderRadius="0.5"
                      marginTop="4"
                      padding="6"
                      color="white"
                      bg="#fb641b"
                      width="16rem"

                    >
                      CONTINUE
                    </Button>
                    <Button
                      marginTop="5"
                      boxShadow="md"
                      p="6"
                      rounded="md"
                      borderRadius="0.5"
                      padding="6"
                      color="#2f74f0"
                      bg="#fff"
                      width="16rem"
                      _hover={'#fff'}
                    >
                      Existing User?{<Login />}
                    </Button>
                  </FormControl>
                </Box>

              </ModalBody>
            </ModalContent>
          </Modal>
      }
    </>
  )
}
