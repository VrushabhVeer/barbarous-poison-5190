import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <Container textAlign="left" maxW="70%" mt="3rem">
        <Box>
          <Text fontSize="30px">READY TO JOIN?</Text>
          <Box w="100px" bg="rgb(238,12,56)" h="2px" mt="0.5rem"></Box>
          <Text mt="1.5rem">
            SparkAmerica is made up of organizations and businesses just like
            yours. If you're interested in participating, joining us as a
            strategic partner, or becoming a sponsor, we would love to hear from
            you. Have questions about how you can utilize our Annual Calendar in
            your organization? We can help you understand how it all works to
            deliver a thriving culture. If you're an individual interested in
            joining a team, please visit our SparkCities page to see if your
            city is listed. From there you can see visit one of our SparkCity
            home pages and look for your organization. If you don't see your
            organization, ask your HR leader to sign up and enter your business
            name and, once verified, your organization will become a part of the
            movement.
          </Text>
        </Box>

        <Flex w="90%" gap="12" p="2" mt="2rem">
          <Box alignItems="left">
            <Text fontSize="24px" mb="1rem">
              REACH OUT
            </Text>
            <Input placeholder="Your Name" size="lg" />
            <Input placeholder="Email Address" size="lg" mt="1.5rem" />
            <Text mt="1.5rem">Your Interest In SparkAmerica</Text>
            <Checkbox>Interested in Partnering</Checkbox>
            <br />
            <Checkbox>Interested in Sponsoring</Checkbox>
            <br />
            <Checkbox>Please bring SparkAmerica to Our City</Checkbox>
            <br />
            <Button
              variant="solid"
              bg="rgb(215,40,47)"
              p="1.5rem"
              borderRadius="30px"
              mt="2rem"
            >
              SEND MESSAGE
            </Button>
          </Box>

          <Box w="25%">
            <Text fontSize="24px" mb="1rem">
              OUR INFORMATION
            </Text>
            <Text>
              <span>support@sparkamerica.com,</span>
            </Text>
            <Text>(888) 330-6891 SparkAmerica,</Text>
            <Text>P.O. Box 123, Oakmont, PA 15139</Text>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Contact;
