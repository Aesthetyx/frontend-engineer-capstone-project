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

// Asset imports
import marioAndAdrianA from "../icons_assets/Mario\ and\ Adrian\ A.jpg";
import marioAndAdrianB from "../icons_assets/Mario\ and\ Adrian\ b.jpg";

// CSS imports
import "./About.css";

export default function About(){
    <Flex>
        <HStack>
            <Spacer />
            <VStack>
                <Box alignItems="start">
                    <Heading as="h1" color="#f4ce14">
                        Little Lemon
                    </Heading>
                    <Heading as="h2" color="#ffffff">
                        Chicago
                    </Heading>
                    <Box flex="1" maxW="200px">
                        <Text color="#ffffff">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
                        </Text>
                    </Box>
                </Box>
            </VStack>
            <Spacer />
            <Image src={marioAndAdrianA} alt="Mario and Adrian A" />
            <Image src={marioAndAdrianB} alt="Mario and Adrian B" />
            <Spacer />
        </HStack>
    </Flex>
}