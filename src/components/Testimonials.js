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
import Rating from "./Rating"

// Asset imports
import randomUser1 from "../icons_assets/randomUser1.jpeg";
import randomUser2 from "../icons_assets/randomUser2.jpeg";
import randomUser3 from "../icons_assets/randomUser3.jpeg";
import randomUser4 from "../icons_assets/randomUser4.jpeg";

// CSS imports
import "./Testimonials.css";

export default function Testimonials() {
    const ratings = [
        {
            name: "Mary",
            stars: 5,
            image: randomUser1,
            review: "Splendid decor and atmosphere, and commendable attitudes shown by staff"
        },
        {
            name: "Jon",
            stars: 4,
            image: randomUser2,
            review: "Superb mediterranean dishes"
        },
        {
            name: "Brenda",
            stars: 4,
            image: randomUser3,
            review: "I had a wonderful dinner at Little Lemon, would definitely recommend"
        },
        {
            name: "Peter",
            stars: 3,
            image: randomUser4,
            review: "Food was great but reserving a table online was tough"
        }
    ]
    return (
        <Flex>
            <VStack>
                <Heading as="h1">Testimonials</Heading>
                <HStack>
                    <Spacer />
                    {ratings.map((rating, index)=><Rating key={index} info={rating} />)}
                    <Spacer />
                </HStack>
            </VStack>
        </Flex>
    )
}