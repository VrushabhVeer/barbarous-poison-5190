import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import TopBar from "../Components/TopBar";

const Help = () => {
  return (
    <div>
      <TopBar />
      <Container mt="3rem">
        <Box textAlign="left">
          <Text textStyle="h1">Help</Text>
          <Text textStyle="h2" color="rgb(23,162,184)">
            You've got questions? We've got answers!
          </Text>
          <Text textStyle="p">
            We hope PeopleOne Health is helping you achieve your goals and
            improve your health, but if you have any questions use the contact
            information below. We'll help get you back on the right track!
          </Text>

          <Button textStyle="btncontinue">FREQENTLY AKS QUESTIONS</Button>

          <Box mt="2rem">
            <Text textStyle="h6">EMAIL</Text>
            <Text textStyle="h2">support@peopleonehealth.com</Text>
          </Box>
          <Box>
            <Text textStyle="h6">PHONE</Text>
            <Text textStyle="h2">+1 (888) 330-6891</Text>
          </Box>
          <Box>
            <Text textStyle="h6">HOURS</Text>
            <Text textStyle="h2">Mon-Fri 9AM to 5PM EST</Text>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Help;
