import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  HStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { haveToken } from "../features/Auth/AuthSlice";
import { SideBar } from "../components/SideBar";
import { PostFeed } from "../components/PostFeed";
import { SuggestPeople } from "../components/SuggestPeople";
import { addUser } from "../features/Auth/UserSlice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(addUser(null));
        localStorage.removeItem("userAccessToken");
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imageUrl = {
    img1: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxaytgjdlbUuWk8dNaUh45qTA9_1cJlgNEz2WDVqucBHn4i8FC",
    img2: "data:image/jpeg;base64,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",
  };
  return (
    <Flex gap={{ base: 4, md: 12 }}>
      <Box w={{ base: "40px", md: "180px" }}>
        <SideBar logout={handleLogout} />
      </Box>

      <Flex w={{ base: "cal(100%-40px)", md: "cal(100%-180px)" }} gap={"200px"}>
        <Box px={4}>
          <PostFeed imageUrl={imageUrl.img1} />
          <PostFeed imageUrl={imageUrl.img2} />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <SuggestPeople />
        </Box>
      </Flex>
    </Flex>
  );
};
