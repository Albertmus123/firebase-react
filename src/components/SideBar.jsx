import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { HomeCustomSvg } from "../svgs/HomeCustomSvg";
import { SearchCustomSvg } from "../svgs/SearchCustomSvg";
import { ExploreCustomSvg } from "../svgs/ExploreCustomSvg";
import { ReelCustomSvg } from "../svgs/ReelCustomSvg";
import { MessageCustomSvg } from "../svgs/MessageCustomSvg";
import { HeartCustomSvg } from "../svgs/HeartCustomSvg";
import { LogoutCustomSvg } from "../svgs/LogoutCustomSvg";
import { useSelector } from "react-redux";

export const SideBar = ({ logout }) => {
  const user = useSelector((state) => state.user);
  return (
    <Flex
      direction={"column"}
      minH={"100vh"}
      wrap={"wrap"}
      px={"12px"}
      gap={"30px"}
      position={"fixed"}
      top={0}
      left={0}
      borderRight={{ base: "none", md: "1px solid gray" }}
    >
      <HStack>
        <Text
          display={{ base: "none", md: "block" }}
          fontSize={{ base: "30px", md: "35px" }}
          fontWeight={"bold"}
          fontFamily={"Dancing Script, cursive"}
          py={"30px"}
        >
          TradiGram
        </Text>
        <Text
          display={{ base: "block", md: "none" }}
          fontSize={{ base: "30px", md: "35px" }}
          fontWeight={"bold"}
          fontFamily={"Dancing Script, cursive"}
        >
          <HeartCustomSvg />
        </Text>
      </HStack>
      <HStack>
        <HomeCustomSvg />
        <Text display={{ base: "none", md: "contents" }} fontWeight={"bold"}>
          Home
        </Text>
      </HStack>
      <HStack>
        <SearchCustomSvg />
        <Text display={{ base: "none", md: "contents" }} fontWeight={"bold"}>
          Search
        </Text>
      </HStack>
      <HStack>
        <ExploreCustomSvg />
        <Text display={{ base: "none", md: "contents" }} fontWeight={"bold"}>
          Explore
        </Text>
      </HStack>
      <HStack>
        <ReelCustomSvg />
        <Text display={{ base: "none", md: "contents" }} fontWeight={"bold"}>
          Reels
        </Text>
      </HStack>
      <HStack>
        <MessageCustomSvg />
        <Text display={{ base: "none", md: "contents" }} fontWeight={"bold"}>
          Messages
        </Text>
      </HStack>

      <Spacer />
      <HStack pb={"30px"} onClick={() => logout()}>
        <LogoutCustomSvg />
        <Text display={{ base: "none", md: "contents" }}>Logout</Text>
      </HStack>
    </Flex>
  );
};
