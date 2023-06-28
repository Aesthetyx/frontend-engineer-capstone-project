// Package imports
import { Flex, Spacer, HStack, Heading, Button } from "@chakra-ui/react";

// Component imports
import Card from "./Card";

// Asset imports
import greekSaladPic from "../icons_assets/greek salad.jpg";
import bruchettaPic from "../icons_assets/bruchetta.png";
import lemonDessertPic from "../icons_assets/lemon dessert.jpg";

// CSS imports
import "./Highlights.css";

export default function Highlights() {
  const thisWeeksSpecials = [
    {
      name: "Greek Salad",
      price: "$12.99",
      image: greekSaladPic,
      description:
        "The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      name: "Bruchetta",
      price: "$5.99",
      image: bruchettaPic,
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      image: lemonDessertPic,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <Flex h="600px">
      <Spacer />
      <Flex direction="column">
        <Flex align="center">
          <Heading as="h1">This weeks specials!</Heading>
          <Spacer />
          <Button colorScheme="yellow" h="30px" w="100px">
            Online Menu
          </Button>
        </Flex>
        <HStack>
          {thisWeeksSpecials.map((thisWeekSpecial, index) => (
            <Card key={index} dish={thisWeekSpecial} />
          ))}
        </HStack>
      </Flex>
      <Spacer />
    </Flex>
  );
}
