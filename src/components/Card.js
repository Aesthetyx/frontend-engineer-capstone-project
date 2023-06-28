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

// Component imports

// Asset imports
import dishIcon from "../icons_assets/Dish\ icon.png"

// CSS imports
import "./Card.css";

export default function Card(props) {
    return (
        <Box borderRadius="lg" w="300px" bg="grey" h="500px">
            <VStack>
                <Image src={props.dish.image} alt={props.dish.name} w="100%" maxH="40%" objectFit="cover"/>
                <HStack>
                    <Heading as="h2">{props.dish.name}</Heading>
                    <Spacer />
                    <Heading as="h2">{props.dish.price}</Heading>
                </HStack>
                <Text>{props.dish.description}</Text>
                <HStack>
                    <Text>Order a delivery</Text>
                    <Image src={dishIcon}/>
                </HStack>
            </VStack>
        </Box>
    )
}