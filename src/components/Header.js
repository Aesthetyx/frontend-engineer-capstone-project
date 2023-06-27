// Package imports
import { Flex, Spacer, Image } from "@chakra-ui/react";

// Component imports
import Nav from "./Nav";

// Asset imports
import logo from "../icons_assets/Logo.png";

// CSS imports
import "./Header.css";

export default function Header() {
  return (
    <Flex className="Header">
      <Spacer />
      <Image src={logo} alt="Little Lemon Logo" />
      <Spacer />
      <Nav />
      <Spacer />
    </Flex>
  );
}
