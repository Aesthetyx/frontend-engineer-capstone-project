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
            <VStack>
                
            </VStack>
            <Image src={marioAndAdrianA} alt="Mario and Adrian A" />
            <Image src={marioAndAdrianB} alt="Mario and Adrian B" />
        </HStack>
    </Flex>
}