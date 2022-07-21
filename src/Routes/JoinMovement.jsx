import {
  Box,
  Button,
  Container,
  Flex,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const JoinMovement = () => {
  return (
    <div>
      <Container maxW="80%" mt="3rem">
        <Box textAlign="left">
          <Text textStyle="h1">
            ONE PERSON, ONE COMMUNITY, ONE CITY AT A TIME
          </Text>
          <Box textStyle="RedBorder"></Box>
          <Text textStyle="p">
            SparkAmerica is focused on building Fit & Healthy leaders all across
            the country. We do that by implementing programs in SparkCities -
            urban and suburban localities whose business and civic leaders have
            joined with us to create community and promote healthy living. We
            are proud of the work being done and the partnerships we've formed
            in each of these cities, and of the friendly competition we see each
            year as they strive to be the healthiest SparkCity in America!
          </Text>
        </Box>

        <Box mt="3rem">
          <Box textAlign="left">
            <Text textStyle="h3">JOIN SPARKAMERICA</Text>
            <Box textStyle="RedBorder"></Box>
            <Text textStyle="p">
              We have over 70 cities participating in SparkAmerica, click below
              to sign up in your city today! You can join your city in three
              ways.
            </Text>
            <UnorderedList>
              <ListItem>First, by being part of your #TeamCity.</ListItem>
              <ListItem>
                Second, by joining an existing business or organization in your
                city.
              </ListItem>
              <ListItem>
                Third, by requesting to add your business or organization.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box mt="1rem">
            <Flex gap="3rem">
              <Select bg="rgb(200,16,46)" borderColor="rgb(200,16,46)">
                <option value="option1">SELECT YOUR CITY (A through N)</option>
              </Select>
              <Select bg="rgb(200,16,46)" borderColor="rgb(200,16,46)">
                <option value="option1">SELECT YOUR CITY (O through Z)</option>
              </Select>
            </Flex>
            <Button textStyle="btnPrimary">JOIN SPARK AMERICA</Button>
          </Box>
        </Box>

        <Box mt="4rem">
          <Text textAlign="left" textStyle="p">
            If you want to get involved in SparkAmerica but don't live in one of
            our participating cities, you can join the SparkAmerica Team. Click
            the button below to go to the TeamAmerica sign in page, make sure to
            choose TeamAmerica as your business/organization during the sign up
            process. Want to learn more about how the SparkAmerica Fit City
            Challenge works and also learn how you can connect to the tools
            inside SparkAmerica? <span>Download our Toolkit</span> today!
          </Text>
          <Button textStyle="toolKitbtn"> DOWNLOAD THE TOOLKIT (PDF) </Button>
        </Box>

        <Box mt="3rem" textAlign="left">
          <Text textStyle="h3">FIT CITY CHALLENGE</Text>
          <Box textStyle="RedBorder"></Box>
          <Text textStyle="p">
            The Fit City Challenge happens twice a year in the Spring and Fall
            and is one of our most active challenges. Once you've signed up fro
            SparkAmerica, you're automatically ready to participate in the Fit
            City Challenge to help your city become one of the healthiest in
            America. Check out the cities below to see the latest leaderboards
            and get your organization and city ready for the next Fit City
            Challenge.
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default JoinMovement;
