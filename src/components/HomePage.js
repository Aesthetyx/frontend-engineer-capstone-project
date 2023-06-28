// Package imports
import { Flex } from "@chakra-ui/react";

// Component imports
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

// Asset imports

// CSS imports
import "./HomePage.css";

export default function main() {
  return (
    <Flex direction="column">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </Flex>
  );
}
