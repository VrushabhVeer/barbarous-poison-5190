import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import TopBar from "../Components/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />

      <Flex w="90%" m="auto" p="3rem" justifyContent="space-around">
        <Box w="580px" borderRadius="15" boxShadow="sm" border="1px solid">
          <Box>
            <Image
              borderTopEndRadius="15px"
              borderTopStartRadius="15px"
              borderBottom="1px solid"
              w="100%"
              src="https://images.unsplash.com/photo-1621691211095-fe4b38f21788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA5fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Box>

          <Box p="1.5rem">
            <Flex justifyContent="space-between">
              <Text>The Importance of Writing Personal Goals Every Week</Text>
              <Text>
                <span>Read</span>
              </Text>
            </Flex>
            <Flex mt="0.5rem" justifyContent="space-between">
              <Text>Check In with Sparkcoach</Text>
              <Text>
                <span>Read</span>
              </Text>
            </Flex>
            <Flex mt="0.5rem" justifyContent="space-between">
              <Text>Fitness Game</Text>
              <Text>
                <span>Read</span>
              </Text>
            </Flex>
            <Button textStyle="btncontinue">+Add Goals</Button>
          </Box>
        </Box>

        <Box
          w="300px"
          borderRadius="15"
          boxShadow="sm"
          border="1px solid"
          textAlign="left"
        >
          <Box>
            <Image
              borderTopEndRadius="15px"
              borderTopStartRadius="15px"
              borderBottom="1px solid"
              width="100%"
              src="https://images.unsplash.com/photo-1459314079206-9970f36c7784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Box>

          <Box mt="0.5rem" p="1rem">
            <Text>
              <span>Healthy Summer Habits Challenge</span>
            </Text>
            <Text mt="1rem">July 1 - July 27</Text>
            <Text>
              Did You Know? With 60 percent of our bodies composed of water, it
              might seem strange that the average person could be chronically
              dehydrated.
            </Text>
            <Button textStyle="btncontinue">Read</Button>
          </Box>
        </Box>

        <Box
          w="300px"
          borderRadius="15"
          boxShadow="sm"
          border="1px solid"
          textAlign="left"
        >
          <Box>
            <Image
              borderTopEndRadius="15px"
              borderTopStartRadius="15px"
              borderBottom="1px solid"
              width="100%"
              src="https://spark360prodstorage.blob.core.windows.net/trackimages/calendarchallenge2022fallfitcitychallenge18.jpeg"
              alt=""
            />
          </Box>

          <Box mt="0.5rem" p="1rem">
            <Text>
              <span>2022 Fall Fit City Challenge</span>
            </Text>
            <Text mt="1rem">SEPTEMBER 1 - OCTOBER 15</Text>
            <Text>
              The 2022 Fall Fit City Challenge is coming soon! Sign up today to
              participate in this free and friendly competition!
            </Text>
            <Button textStyle="btncontinue">Go</Button>
          </Box>
        </Box>
      </Flex>

      <Box w="100%" p="3rem" bg="rgb(33,169,163)">
        <Text textStyle="h4">QUOTE OF THE DAY</Text>
        <Text textStyle="h1">
          It is health that is real wealth and not pieces of gold and silver.
        </Text>
        <Text textStyle="p">~ Mohandas Gandhi ~</Text>
      </Box>

      <Box mt="5rem">
        <Text textStyle="h1">Health happens everywhere!</Text>
        <Text>
          <span>Learn more </span> about our powerful apps and take PeopleOne
          Health on the go.
        </Text>
      </Box>
    </div>
  );
};

export default Home;
