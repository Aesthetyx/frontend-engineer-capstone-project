// Package imports
import { Flex, Spacer, Image } from "@chakra-ui/react";

// Component imports
import Nav from "./Nav";

// Asset imports
import logo from "../icons_assets/Logo.png";

export default function Header() {
  return (
    <Flex>
      <Spacer />
      <Image src={logo} alt="Little Lemon Logo" />
      <Spacer />
      <Nav />
      <Spacer />
    </Flex>
  );
}
