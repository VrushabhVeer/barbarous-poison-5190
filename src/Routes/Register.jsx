import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Register = () => {
  return (
    <div>
      <Box
        textAlign="left"
        p="2.5rem"
        border="1px solid "
        m="auto"
        mt="3rem"
        w="600px"
        borderRadius="10"
      >
        <Box>
          <Input type="email" placeholder="email address" size="lg" />
          <Text textStyle="p">
            Note: If your organization or company already uses PeopleOne, please
            enter your company email address above
          </Text>
        </Box>
        <br />
        <Box>
          <Input type="password" placeholder="password" size="lg" />
        </Box>
        <Flex justifyContent="space-between">
          <Link to="/">
            <Button textStyle="btnGhost">˂ Go Back</Button>
          </Link>
          <Link to="/peopleOne">
            <Button textStyle="btncontinue">CONTINUE</Button>
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default Register;
