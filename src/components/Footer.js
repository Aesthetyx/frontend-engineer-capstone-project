// Package imports
import {
  Flex,
  Spacer,
  Link,
  Box,
  VStack,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";

// Asset imports
import logo from "../icons_assets/Logo.png";

// CSS imports
import "./Footer.css";

export default function Footer() {
  const doormatNavHeaders = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Menu",
      url: "/menu",
    },
    {
      name: "Reservations",
      url: "/reservations",
    },
    {
      name: "Order Online",
      url: "/order-online",
    },
    {
      name: "Login",
      url: "/login",
    },
  ];
  const contactDetails = [
    { name: "Address", info: "123 ABC Road" },
    { name: "Phone Number", info: "1234-5678" },
    { name: "Email", info: "little-lemon@gmail.com" },
  ];
  const socials = [
    {
      name: "Facebook",
      url: "www.facebook.com/little-lemon",
    },
    {
      name: "Instagram",
      url: "www.instagram.com/little-lemon",
    },
  ];
  return (
      <Flex className="Footer" bg="#FBDABB">
        <Spacer />
        <Image src={logo} alt="Little Lemon Logo" objectFit="contain"/>
        <Spacer />
        <Flex gridGap={100} className="Footer">
          <VStack alignItems="start">
            <Heading>Doormat Navigation</Heading>
            {doormatNavHeaders.map((doormatNavHeader, index) => (
              <Link key={index} href={doormatNavHeader.url}>
                {doormatNavHeader.name}
              </Link>
            ))}
          </VStack>
          <VStack alignItems="start">
            <Heading>Contact</Heading>
            {contactDetails.map((contactDetail, index) => (
              <Text key={index}>{contactDetail.info}</Text>
            ))}
          </VStack>
          <VStack alignItems="start">
            <Heading>Social Media Links</Heading>
            {socials.map((social, index) => (
              <Link key={index} href={social.url}>
                {social.name}
              </Link>
            ))}
          </VStack>
        </Flex>
        <Spacer />
      </Flex>
  );
}
