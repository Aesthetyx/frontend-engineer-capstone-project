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
} from "@chakra-ui/react";

// Asset imports
import marioAndAdrianA from "../icons_assets/Mario and Adrian A.jpg";
import marioAndAdrianB from "../icons_assets/Mario and Adrian b.jpg";

// CSS imports
import "./About.css";

export default function About() {
  return (
    <Flex h="300px">
      <Spacer />
      <HStack>
        <VStack>
          <Box alignItems="start">
            <Heading as="h1" color="#000000">
              Little Lemon
            </Heading>
            <Heading as="h2" color="#000000">
              Chicago
            </Heading>
            <Box flex="1" maxW="300px">
              <Text color="#000000">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist
              </Text>
            </Box>
          </Box>
        </VStack>
        <Spacer />
        <Image src={marioAndAdrianA} alt="Mario and Adrian A" maxW="300px" />
        <Image src={marioAndAdrianB} alt="Mario and Adrian B" maxW="300px" />
      </HStack>
      <Spacer />
    </Flex>
  );
}
