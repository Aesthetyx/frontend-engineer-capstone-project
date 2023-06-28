// Package imports
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

// CSS imports
import "./Rating.css";

export default function Rating(props) {
  return (
    <Flex borderRadius="lg" bg="#EDEFEE" w="200px" h="300px" direction="column">
      <Flex>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <StarIcon
              key={index}
              color={index < props.info.stars ? "yellow" : "grey"}
            />
          ))}
      </Flex>
      <Flex align="start">
        <Image src={props.info.image} alt={props.info.name} boxSize="80px" />
        <Text>{props.info.name}</Text>
      </Flex>
      <Box>
        <Text>{props.info.review}</Text>
      </Box>
    </Flex>
  );
}
