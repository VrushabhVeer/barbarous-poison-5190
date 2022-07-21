import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Calenders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vrushabhveer.github.io/calender-data-api/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <Container maxW="80%" mt="3rem">
        <Box textAlign="left">
          <Text textStyle="h1">OUR CALENDAR</Text>
          <Box textStyle="RedBorder"></Box>
          <Text textStyle="p">
            SparkAmerica works hard to build community and be accessible to
            everyone, because leaders come in all shapes, sizes, and levels of
            ability so there's something for everyone, all year round. The
            challenges and events on the SparkAmerica Calendar are designed by
            experts in lifestyle coaching and behavior change science for total
            health of participants. That means subjects like nutrition, mental
            health, sleep, and even financial wellness will covered. The
            physical challenges, are based on Active Minutes. That means that
            anyone can participate, because all you need is to be active for at
            least 10 minutes a day. All kinds of activity - walk your dog,
            garden, roller skate, play basketball, dance, hike, skateboard, swim
            - count toward your Active Minutes! All of our challenges utilize
            the
            <span> PeopleOne Health portal</span>, our free and easy-to-use
            technology platform.
          </Text>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt="3rem">
          {data.map((e) => (
            <GridItem p="5" border="1px solid" key={e.id}>
              <Box w="100%" h="120px">
                <Text textStyle="h2">{e.title}</Text>
                <Text>{e.text}</Text>
                <Text textStyle="h4">{e.date}</Text>
              </Box>
              <Box h="70%" mt="2rem">
                <Image h="100%" w="100%" src={e.img} />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Calenders;
