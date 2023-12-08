import {
  Flex,
  Avatar,
  Text,
  HStack,
  Spacer,
  VStack,
  Wrap,
  WrapItem,
  Badge,
} from "@chakra-ui/react";
import React from "react";

export const SuggestPeople = () => {
  return (
    <Flex direction={"column"} gap={"20px"}>
      <HStack pe={"12px"} py={"12px"}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Text fontWeight={"bold"}>Olivia Rodrigo</Text>
        <Text>2:00 pm</Text>
        <Spacer />
        <Text>Switch</Text>
      </HStack>
      <VStack>
        <Text fontWeight={"bold"}>Suggested For You</Text>
        <Wrap direction={"column"}>
          <WrapItem alignItems={"center"} gap={"12px"}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text fontWeight={"bold"}>Musabyemungu Albert</Text>
            <Badge variant="solid" colorScheme="yellow">
              Follow
            </Badge>
          </WrapItem>
          <WrapItem alignItems={"center"} gap={"12px"}>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
            <Text fontWeight={"bold"}>Diane Kamaka</Text>
            <Text color={"yellow.600"}>follow</Text>
          </WrapItem>
        </Wrap>
      </VStack>
    </Flex>
  );
};
