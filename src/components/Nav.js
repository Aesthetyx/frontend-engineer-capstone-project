// Package imports
import { HStack } from "@chakra-ui/react";

// CSS imports
import "./Nav.css";

export default function Nav() {
  const navHeaders = [
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

  return (
    <nav>
      <HStack alignItems="center" className="Nav">
        {navHeaders.map((navHeader, index) => (
          <a key={index} href={navHeader.url}>
            {navHeader.name}
          </a>
        ))}
      </HStack>
    </nav>
  );
}
