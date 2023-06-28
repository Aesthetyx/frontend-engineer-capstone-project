// Package imports
import { Flex, Spacer, Image, VStack} from "@chakra-ui/react";

// Component imports
import Nav from "./Nav";

// Asset imports
import logo from "../icons_assets/Logo.png";

// CSS imports
import "./Header.css";

export default function Header() {
  return (
    <Flex className="Header" h="100px">
      <Spacer />
      <Image src={logo} alt="Little Lemon Logo" objectFit="contain"/>
      <Spacer />
      <VStack>
        <Spacer />
        <Nav />
        <Spacer />
      </VStack>
      <Spacer />
    </Flex>
  );
}
