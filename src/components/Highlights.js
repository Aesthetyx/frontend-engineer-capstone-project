// Package imports
import {
    Flex,
    Spacer,
    Image,
    VStack,
    Heading,
    Text,
    Box,
    Button,
  } from "@chakra-ui/react";

// Component imports
import Card from "./Card"

// Asset imports
import greekSaladPic from "../icons_assets/greek\ salad.jpg";
import bruchettaPic from "../icons_assets/bruchetta.png";
import lemonDessertPic from "../icons_assets/lemon\ dessert.jpg";

// CSS imports
import "./Highlights.css";

export default function Highlights() {
    const thisWeeksSpecials = [
        {
            name: "Greek salad",
            price: "$12.99",
            image: greekSaladPic,
            description: "


        },
    ]
    return (
        <Flex>
            <VStack>
                <HStack></HStack>
                <HStack>
                    <Card food={greekSalad} />
                    <Card food={bruchetta}/>
                    <Card food={lemonDessert} />
                </HStack>
            </VStack>
        </Flex>
    )
}