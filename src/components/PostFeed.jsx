import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Image,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { LikeCustomSvg } from "../svgs/LikeCustomSvg";
import { DisLikeCustomSvg } from "../svgs/DisLikeCustomSvg";
import { CommentCustomSvg } from "../svgs/CommentCustomSvg";
import { SendCustomSvg } from "../svgs/SendCustomSvg";

export const PostFeed = ({ imageUrl }) => {
  return (
    <Flex direction={"column"} rounded={"12px"} p={2}>
      <HStack px={"12px"} py={"12px"}>
        <Avatar name="Dan Abrahmov" src={imageUrl} />
        <Text fontWeight={"bold"} fontSize={{ base: "15px", md: "17px" }}>
          Olivia Rodrigo
        </Text>
        <Text fontSize={{ base: "15px", md: "17px" }}>2:00 pm</Text>
        <Spacer />
        <Text>...</Text>
      </HStack>
      <Box>
        <Image
          height={"400px"}
          width={"400px"}
          objectFit={"cover"}
          src={imageUrl}
          alt=""
        />
      </Box>
      <HStack my={"8px"} gap={2} alignItems={"center"}>
        <CommentCustomSvg />s
        <LikeCustomSvg />
        <DisLikeCustomSvg />
      </HStack>
      <Box>
        <Text fontWeight={"bold"}>3 Likes </Text>
      </Box>
      <Box color={"yellow.400"} py={"4px"}>
        Comments ...
      </Box>
      <Box>
        <InputGroup>
          <Textarea
            border={"1px solid"}
            borderColor={"gray.600"}
            placeholder="lovelly...."
            _focus={{ border: "0.1rem solid ", borderColor: "yellow.700" }}
          />
          <InputRightElement px={"5px"}>
            <SendCustomSvg />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};
