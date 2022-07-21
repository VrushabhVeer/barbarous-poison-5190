import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Partners = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vrushabhveer.github.io/partner-api/partners.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <Container maxW="80%" mt="3rem">
        <Box textAlign="left">
          <Text textStyle="h1">OUR PARTNERS</Text>
          <Box textStyle="RedBorder"></Box>
          <Text textStyle="p">
            We are extremely grateful to have amazing partners in building
            SparkAmerica, they help make all we do possible. From providing
            prizes to social media awareness to television time, they keep the
            spark ignited across our cities and communities. Our partners
            collectively work with thousands of companies including HR leaders
            and exec teams and millions of TV and digital viewers. If you're
            interested in partnering with us please{" "}
            <span>
              {" "}
              <Link to="/contact">contact us</Link>{" "}
            </span>
            via email.
          </Text>
        </Box>

        <Box mt="3rem" border="1px solid" p="1.5rem">
          <Flex gap="30px">
            <Box w="40%">
              <Image
                mt="5rem"
                src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/VioinicLG-01.png"
                alt=""
              />
            </Box>

            <Box w="58%" textAlign="left">
              <Text textStyle="h2">VIONIC SHOES</Text>
              <Text textStyle="h4">Presenting Sponsor</Text>
              <Text textStyle="p">
                Whether you’re shopping for men’s shoes or women’s shoes,
                comfortable stylish shoes that keep up with the current style
                trends should be a priority. What if you could have all that,
                with supportive arch support technology to relieve aching feet
                and pain from plantar fasciitis or heel pain? At Vionic, our
                shoes for women and men provide arch support technology in the
                most up to date styles. Made with high quality and breathable
                materials such as durable leather and soft suede, our footwear
                is created for all-day wear so that your feet can be comfortable
                no matter where you are going. Walk in comfort when you slip
                into a comfortable pair of shoes with arch support from Vionic.
              </Text>
            </Box>
          </Flex>

          <Button textStyle="btnPrimary">VISIT VIONIC SHOES</Button>
        </Box>

        <Grid textAlign="left" templateColumns="repeat(3, 1fr)" gap={3} mt="3">
          {data.map((e) => (
            <GridItem p="2rem" border="1px solid" w="100%" key={e.id}>
              <Box>
                <Box h="40%" mb="3rem">
                  <Image h="100%" src={e.img} />
                </Box>
                <Box h="50%">
                  <Text textStyle="h1">{e.title}</Text>
                  <Text textStyle="h4">{e.partner}</Text>
                  <Text textStyle="p">{e.desc}</Text>
                  <Button textStyle="btnPrimary">{e.btn}</Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Partners;
