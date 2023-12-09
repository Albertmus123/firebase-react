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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { EyeCloseCustomSvg } from "../svgs/EyeCloseCustomSvg";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/Auth/UserSlice";

export const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [haveAccount, setHaveAccount] = useState(true);
  const [fieldValidate, setFieldValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [createAccountError, setCreateAccountError] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    if (!email || !password || !confirmPassword) {
      setFieldValidate(true);
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setPasswordValidate(true);
      setLoading(false);
      return;
    }
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setHaveAccount(true);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorCode == "auth/email-already-in-use" && setCreateAccountError(true);
        setLoading(false);
      });
  };

  const signIn = async () => {
    setLoading(true);
    if (!email || !password) {
      setFieldValidate(true);
      setLoading(false);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(addUser(user.accessToken));
        localStorage.setItem(
          "userAccessToken",
          JSON.stringify(user.accessToken)
        );
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
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minH={"100vh"}
      >
        <VStack
          spacing={"20px"}
          padding={"12px"}
          w={{ base: "100%", md: "50%", lg: "30%" }}
        >
          <Text
            fontSize={{ base: "30px", md: "60px" }}
            fontWeight={"bold"}
            fontFamily={"Dancing Script, cursive"}
            py={"30px"}
          >
            TradiGram
          </Text>
          {fieldValidate && (
            <Text
              letterSpacing={"2px"}
              color={"red.300"}
              fontSize={"15px"}
              py={"12px"}
            >
              Both Email and Password are required !
            </Text>
          )}

          {
            (createAccountError ? (
              <Text
                letterSpacing={"2px"}
                color={"red.300"}
                fontSize={"15px"}
                py={"12px"}
              >
                Account already Exists!
              </Text>
            ) : (
              setTimeout(() => {
                return (
                  <Alert status="success">
                    <AlertIcon />
                    Your account has been created Successfully !{" "}
                  </Alert>
                );
              })
            ),
            1000)
          }

          {passwordValidate && (
            <Text
              letterSpacing={"2px"}
              color={"red.300"}
              fontSize={"15px"}
              py={"12px"}
            >
              Password and ConfirmPassword mismatch !
            </Text>
          )}

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
            <FormLabel letterSpacing={"2px"} fontSize={"17px"}>
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
                id="email"
                name="email"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel letterSpacing={"2px"} fontSize={"17px"}>
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
                id="password"
                name="password"
              />
              <InputRightElement px={"5px"}>
                <EyeCloseCustomSvg />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {!haveAccount && (
            <FormControl id="ConfirmPassword" isRequired>
              <FormLabel letterSpacing={"2px"} fontSize={"17px"}>
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  _focus={{ border: "0.1rem solid yellow" }}
                  rounded={"12px"}
                  color={"yellow.100"}
                  fontSize={"14px"}
                  letterSpacing={"2px"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  type="password"
                  id="Confirm Password"
                  name="ConfirmPassword"
                  autoComplete="off"
                />
                <InputRightElement px={"5px"}>
                  <EyeCloseCustomSvg />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          )}

          {haveAccount ? (
            <Button onClick={signIn} letterSpacing={"3px"} w={"full"}>
              {!loading ? "Go On!" : <Spinner size="sm" />}
            </Button>
          ) : (
            <Button onClick={signUp} letterSpacing={"3px"} w={"full"}>
              {!loading ? "Sign Up" : <Spinner size="sm" />}
            </Button>
          )}

          <Text
            letterSpacing={"2px"}
            fontSize={"15px"}
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
        <Flex
          pt={"10px"}
          gap={"40px"}
          fontSize={"17px"}
          letterSpacing={"2px"}
          color={"yellow.600"}
          wrap={"wrap"}
          alignItems={"center"}
        >
          <Text>{/* <LicenseCustomSvg /> */}Licensed</Text>
          <Text>Fashionists</Text>
          <Text>Outfits</Text>
        </Flex>
      </Flex>
    </Container>
  );
};
