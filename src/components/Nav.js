// Package imports
import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// CSS imports
import "./Nav.css";

export default function Nav() {
  const navHeaders = [
    {
      name: "Home",
      url: "/",
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
      url: "/booking-page",
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
          <Link key={index} to={navHeader.url}>
            {navHeader.name}
          </Link>
        ))}
      </HStack>
    </nav>
  );
}
