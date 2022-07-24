import { Box, Button, Flex, Input, Text, FormControl } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Register = () => {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const authenticate = useContext(AppContext);

  const handlleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        authenticate.handelLogin(res.token);
        navigate("/peopleOne");
        console.log(res);
      });
  };

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
        <FormControl>
          <Box>
            <Input
              type="email"
              placeholder="email address"
              value={formInfo.email}
              onChange={handlleChange}
              name="email"
              size="lg"
            />
            <Text textStyle="p">
              Note: If your organization or company already uses PeopleOne,
              please enter your company email address above
            </Text>
          </Box>
          <br />
          <Box>
            <Input
              value={formInfo.password}
              onChange={handlleChange}
              type="password"
              placeholder="password"
              name="password"
              size="lg"
            />
          </Box>
          <Flex justifyContent="space-between">
            <Link to="/">
              <Button textStyle="btnGhost">˂ Go Back</Button>
            </Link>
            <Button onClick={handelSubmit} textStyle="btncontinue">
              CONTINUE
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </div>
  );
};

export default Register;
