import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import TopBar from "../Components/TopBar";

const Community = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vrushabhveer.github.io/user-api/user.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <Box
        textAlign="left"
        w="100%"
        bgGradient="linear(to-r, #093028, #237a57)"
        p="3rem"
      >
        <Heading>Community</Heading>
        <Flex mt="3rem" w="80%" justifyContent="space-between">
          <Box>
            <Image
              src="https://portal.peopleonehealth.com/content/images/Community/comm_all_teams.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://portal.peopleonehealth.com/content/images/Community/comm_my_teams.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://portal.peopleonehealth.com/content/images/Community/comm_my_profile.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://portal.peopleonehealth.com/content/images/Community/comm_create_team.svg"
              alt=""
            />
          </Box>
        </Flex>
      </Box>

      <Box textAlign="left" pl="3rem">
        <Text mt="1rem" textStyle="h1">
          People On SparkAmerica
        </Text>
        <Box textStyle="RedBorder"></Box>
      </Box>

      <Grid
        w="60%"
        ml="3rem"
        templateColumns="repeat(3, 1fr)"
        gap="5"
        mt="3rem"
      >
        {data.map((e) => (
          <GridItem
            p="3rem"
            h="290px"
            w="100%"
            key={e.id}
            border="1px solid"
            borderRadius="20px"
          >
            <Image borderRadius="50%" w="100%" h="100%" src={e.img} />

            <Box alignItems="center">
              <Text mt="0.5rem" textStyle="h5">
                {e.name}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Community;
