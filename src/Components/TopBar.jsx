import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const TopBar = () => {
  const auth = useContext(AppContext);
  return (
    <>
      <Flex
        gap="40px"
        fontSize="17px"
        m="auto"
        mt="0.5rem"
        p="0.5rem"
        bg="rgb(66,168,242)"
        color="white"
      >
        <Flex width="550px" m="auto" gap="30px">
          <Box>
            <Link to="/peopleOne">Home</Link>
          </Box>
          <Box>
            <Link to="/community">Community</Link>
          </Box>
          <Box>
            <Link to="/healthy_living">Healthy Living</Link>
          </Box>
          <Box>
            <Link to="/help">Help</Link>
          </Box>
          <Box>
            <Link onClick={auth.handelLogout} to="">
              Sign out
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
