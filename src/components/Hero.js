// Package imports
import {
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

// Asset imports
import breadDish from "../icons_assets/restauranfood.jpg";

// CSS imports
import "./Hero.css";

export default function Hero() {
  return (
    <Box flex="1" bg="#495e57">
      <Flex className="Hero">
        <Spacer />
        <Box alignItems="start">
          <Heading as="h1" color="#f4ce14">
            Little Lemon
          </Heading>
          <Heading as="h2" color="#ffffff">
            Chicago
          </Heading>
          <Box flex="1" maxW="200px">
            <Text color="#ffffff">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </Text>
          </Box>
          <Button colorScheme="yellow" size="lg">
            Reserve a table
          </Button>
        </Box>
        <Spacer />
        <Image src={breadDish} alt="Chef holding bread dish" maxW="300px" />
        <Spacer />
      </Flex>
    </Box>
  );
}
