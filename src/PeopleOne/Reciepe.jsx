import {
  Box,

  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import TopBar from "../Components/TopBar";

const Reciepe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vrushabhveer.github.io/healthy-recipes-api/recipes.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <Box w="100%" p="3rem" bg="rgb(33,169,163)">
        <Text textStyle="h1">
          “Take care of your body. It’s the only place you have to live.”
        </Text>
        <Text textStyle="p">~ Jim Rohn ~</Text>
      </Box>

      <Box w="85%" m="auto">
        <Box textAlign="left">
          <Text textStyle="p">HEALTHY LIVING • ALL RECIPES</Text>
          <Text textStyle="h1">Viewing: All Recipes</Text>
          <Box textStyle="RedBorder"></Box>
        </Box>
        <Grid
          w="100%"
          m="auto"
          templateColumns="repeat(3, 1fr)"
          gap={10}
          mt="2rem"
        >
          {data.map((e) => (
            <GridItem w="100%" key={e.id}>
              <Box>
                <Box h="40%">
                  <Image h="100%" w="100%" src={e.img} />
                </Box>

                <Box h="50%" p="1rem">
                  <Text textStyle="h4">{e.name}</Text>
                  <Flex
                    w="70%"
                    m="auto"
                    mt="1rem"
                    justifyContent="space-between"
                  >
                    <Box textStyle="nutriBox">
                      <Text>Fat</Text>
                      <Text>{e.fat}</Text>
                    </Box>
                    <Box textStyle="nutriBox">
                      <Text>Protein</Text>
                      <Text>{e.protein}</Text>
                    </Box>
                    <Box textStyle="nutriBox">
                      <Text>Carbs</Text>
                      <Text>{e.carbs}</Text>
                    </Box>
                    <Box textStyle="nutriBox">
                      <Text>Fiber</Text>
                      <Text>{e.fiber}</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Reciepe;
