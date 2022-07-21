import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Container maxW="100%">
        <Box w="515px" m="auto" mt="1rem">
          <Link to="/">
            <Image
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/SparkAmerica2020-02-768x96.png"
              alt=""
            />
          </Link>
        </Box>
        <Flex
          w="800px"
          gap="40px"
          fontSize="17px"
          m="auto"
          mt="1rem"
          color="black"
        >
          <Link to="/joinMovement">JOIN THE MOVEMEMNT</Link>
          <Link to="/partners">PARTNERS</Link>
          <Link to="/calenders">CALENDER</Link>
          <Link to="/theapp">THE APP</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/register">REGISTER</Link>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
