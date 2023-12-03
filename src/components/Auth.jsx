import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EyeCustomSvg } from "../svgs/EyeCustomSvg";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleCustomSvg } from "../svgs/GoogleCustomSvg";
import { googleProvider } from "../config/firebase";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    if (!email || !password) {
      console.log("invalid email or password");
    }
    await createUserWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
  };
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Container maxW={"100%"}>
      <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
        <VStack
          spacing={"20px"}
          padding={"12px"}
          w={{ base: "100%", md: "50%", lg: "30%" }}
        >
          <Text
            letterSpacing={"5px"}
            fontSize={"30px"}
            fontWeight={"bold"}
            py={"30px"}
          >
            Login To TeenIG
          </Text>
          <FormControl id="email" isRequired>
            <FormLabel letterSpacing={"3px"}>Email</FormLabel>
            <InputGroup>
              <Input
                _focus={{ border: "0.1rem solid yellow" }}
                rounded={0}
                color={"yellow.100"}
                fontSize={"14px"}
                letterSpacing={"2px"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exampe@example.com"
                type="email"
                name="email"
                aria-label="Email"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel letterSpacing={"3px"}>Password</FormLabel>
            <InputGroup>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                aria-label="Password"
              />
              <InputRightElement px={"5px"}>
                <EyeCustomSvg />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button onClick={signIn} letterSpacing={"3px"} w={"full"}>
            Sign In
          </Button>
          <Box>
            <HStack
              border={"1px solid "}
              borderColor={"gray.700"}
              px={"40px"}
              py={"8px"}
              _hover={{
                borderColor: "yellow.100",
              }}
              cursor={"pointer"}
              onClick={signInWithGoogle}
            >
              <GoogleCustomSvg />
              <Text fontWeight={"bold"} letterSpacing={"2px"}>
                oogle Account ?
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};
