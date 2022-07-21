import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container
        bg="rgb(61,124,201)"
        maxW="100%"
        maxH="455px"
        mt="8rem"
        p="5rem"
      >
        <Flex gap="70px" textAlign="left" w="480px" m="auto">
          <Box>
            <Text fontSize="22px">CONTACT US</Text>
            <Text mt="1rem">support@sparkamerica.com,</Text>
            <Text>(888) 330-6891 SparkAmerica,</Text>
            <Text>P.O. Box 123, Oakmont, PA 15139</Text>
          </Box>
          <Box>
            <Text fontSize="22px">SPARKAMERICA</Text>
            <Text mt="1rem">
              <Link to="/joinMovement">JOIN THE MOVEMENT</Link>
            </Text>
            <Text>
              <Link to="/partners">PARTNERS</Link>
            </Text>
            <Text>
              <Link to="/calenders">CALENDER</Link>
            </Text>
            <Text>
              <Link to="/theapp">THE APP</Link>
            </Text>
            <Text>
              <Link to="/contact">CONTACT US</Link>
            </Text>
            <Text>
              <Link to="/register">REGISTER</Link>
            </Text>
          </Box>
        </Flex>
        <Box textAlign="center" mt="5rem">
          ® 2020 PeopleOne Health. All Rights Reserved.
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
