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
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EyeCustomSvg } from "../svgs/EyeCustomSvg";
import { auth } from "../config/firebase";
import {} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { haveToken } from "../features/Auth/AuthSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [haveAccount, setHaveAccount] = useState(true);
  const navigate = useNavigate();

  const signIn = async () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(haveToken());
        console.log(user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        setError(true);
        setLoading(false);
      });
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
            letterSpacing={"3px"}
            fontSize={"30px"}
            fontWeight={"bold"}
            py={"30px"}
          >
            Login To TeenIG
          </Text>
          {error && (
            <Text
              letterSpacing={"2px"}
              color={"red.300"}
              fontSize={"15px"}
              py={"12px"}
            >
              Invalid Email or Password !
            </Text>
          )}

          <FormControl id="email" isRequired>
            <FormLabel letterSpacing={"3px"} fontSize={"12px"}>
              Email
            </FormLabel>
            <InputGroup>
              <Input
                _focus={{ border: "0.1rem solid yellow" }}
                rounded={"12px"}
                color={"yellow.100"}
                fontSize={"14px"}
                letterSpacing={"2px"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exampe@example.com"
                type="email"
                name="email"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel letterSpacing={"3px"} fontSize={"12px"}>
              Password
            </FormLabel>
            <InputGroup>
              <Input
                _focus={{ border: "0.1rem solid yellow" }}
                rounded={"12px"}
                color={"yellow.100"}
                fontSize={"14px"}
                letterSpacing={"2px"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
              />
              <InputRightElement px={"5px"}>
                <EyeCustomSvg />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {!haveAccount && (
            <FormControl id="ConfirmPassword" isRequired>
              <FormLabel letterSpacing={"3px"} fontSize={"12px"}>
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  _focus={{ border: "0.1rem solid yellow" }}
                  rounded={"12px"}
                  color={"yellow.100"}
                  fontSize={"14px"}
                  letterSpacing={"2px"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Confirm Password"
                  type="password"
                  name="ConfirmPassword"
                />
                <InputRightElement px={"5px"}>
                  <EyeCustomSvg />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          )}
          <Button onClick={signIn} letterSpacing={"3px"} w={"full"}>
            {!loading ? "Go On!" : <Spinner size="xs" />}
          </Button>
          <Text
            letterSpacing={"3px"}
            fontSize={"13px"}
            fontWeight={"bold"}
            py={"12px"}
          >
            {haveAccount
              ? "Don't have an Account ? "
              : "Already have an Account ?"}

            {!haveAccount ? (
              <Text
                as={"span"}
                cursor={"pointer"}
                color={"yellow.600"}
                onClick={() => setHaveAccount(!haveAccount)}
              >
                Log in
              </Text>
            ) : (
              <Text
                as={"span"}
                cursor={"pointer"}
                color={"yellow.600"}
                onClick={() => setHaveAccount(!haveAccount)}
              >
                Sign Up
              </Text>
            )}
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};
