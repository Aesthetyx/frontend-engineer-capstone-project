// Package imports
import {
    Flex,
    Spacer,
    Image,
    VStack,
    HStack,
    Heading,
    Text,
    Box,
    Button,
  } from "@chakra-ui/react";

// CSS imports
import "./Rating.css";

export default function Rating(props) {
    return (
        <Box borderRadius="lg" bg="grey" w="200px" h="300px">
            <VStack>
                <Flex>{props.info.stars} stars</Flex>
                <Flex align="start">
                    <Image src={props.info.image} alt={props.info.name} boxSize="64px"/>
                    <Text>{props.info.name}</Text>
                </Flex>
                <Box>
                    <Text>{props.info.review}</Text>
                </Box>
            </VStack>
        </Box>
    )
}