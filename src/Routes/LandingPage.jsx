import React from "react";
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

const LandingPage = () => {
    return (
        <div>
            <Box>
                <Image
                    width="100%"
                    mt="20px"
                    h="950px"
                    src="https://sparkamerica.com/wp-content/uploads/2020/12/HomeHeader1.jpg"
                    alt=""
                />
                <Box
                    textAlign="left"
                    w="700px"
                    color="black"
                    position="absolute"
                    top="13%"
                    left="35%"
                    transform=" translate(-50%, -50%)"
                >
                    <Text textStyle="h1">WHAT IS SPARKAMERICA?</Text>
                    <Box textStyle="RedBorder"></Box>
                    <Text textStyle="p">
                        SparkAmerica is a movement. Launching from a platform that reached
                        over 25 million users and helped countless people get healthier,
                        SparkAmerica is led by an alliance of local and national partners
                        that work together to “spark” America’s Fitness & Health, Leadership
                        Development, and Community Engagement by helping one person, one
                        organization, and one city at a time. SparkAmerica brings people,
                        organizations, and cities together on a single tech platform to
                        participate in our free and fun annual calendar of challenges that
                        encourage individual achievement while driving participation in
                        friendly competition. Covering areas from weight loss to financial
                        health to getting and staying active, we provide an easy-to-use
                        system for tracking progress. From personal stats to city
                        leaderboards, we make it easy to build motivation and keep getting
                        healthier.
                    </Text>
                </Box>
                <Image
                    width="100%"
                    position="absolute"
                    top="33.9%"
                    left="50%"
                    transform=" translate(-50%, -50%)"
                    h="20px"
                    src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/colorband.jpg"
                    alt=""
                />
            </Box>

            <Container maxW="80%" m="auto" mt="8rem">
                <Flex gap="25px">
                    <Box width="537px">
                        <Text textStyle="h1" textAlign="left">
                            SPARKCITIES
                        </Text>
                        <Box textStyle="RedBorder"></Box>
                        <Text textStyle="p" textAlign="left">
                            Is your city a SparkCity? Great cities like Pittsburgh, Cleveland,
                            Cincinnati, Akron, and Columbus are engaged in friendly and
                            spirited competition to become healthier and more community
                            focused.
                        </Text>
                        <Image
                            mt="20px"
                            src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/SparkCity_Columbus.jpg"
                            alt=""
                        />
                        <Button textStyle="btnPrimary">JOIN THE MOVEMENT 🠮</Button>
                    </Box>

                    <Box width="537px">
                        <Text textStyle="h1" textAlign="left">
                            SPARKPARTNERS
                        </Text>
                        <Box textStyle="RedBorder"></Box>
                        <Text textStyle="p" textAlign="left">
                            At SparkAmerica we team with brands that promote health for
                            everyone, like Vionic and RYU. We also have media partners in each
                            of our cities that help us promote awareness and activate
                            participation.
                        </Text>
                        <Image
                            mt="20px"
                            src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Partner_Vionic_Shoes.jpg"
                            alt=""
                        />
                        <Button textStyle="btnPrimary">OUR PARTNERS NETWORK 🠮</Button>
                    </Box>
                </Flex>
            </Container>

            <Container maxW="80%" m="auto" mt="10rem">
                <Flex gap="30px">
                    <Box w="32%">
                        <Text textStyle="h1" textAlign="left">
                            PEOPLEONE HEALTH APP AND WEBSITE
                        </Text>
                        <Box textStyle="RedBorder"></Box>
                        <Text textStyle="p" textAlign="left">
                            At the core of SparkAmerica you'll find the PeopleOne Health app.
                            This technology platform helps our members track their health and
                            join in challenges through our easy-to-use Fitness Game. So
                            whether you're an individual or part of a large corporation, you
                            can have access to our world class platform that's intuitive, fun,
                            and FREE.
                        </Text>
                        <Button textStyle="btnPrimary">LEARN MORE</Button>
                    </Box>
                    <Box width="58%">
                        <Grid
                            height="550px"
                            width="100%"
                            templateRows="repeat(5, 1fr)"
                            templateColumns="repeat(6, 1fr)"
                            gap={4}
                        >
                            <GridItem rowSpan={1} colSpan={3}>
                                <Image
                                    src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/Homepage_FitnessGame6.jpg"
                                    alt=""
                                />
                            </GridItem>

                            <GridItem rowSpan={4} colSpan={3}>
                                <Image
                                    src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/Homepage_FitnessGame0.jpg"
                                    alt=""
                                />
                            </GridItem>

                            <GridItem rowSpan={4} colSpan={3}>
                                <Image
                                    src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/Homepage_FitnessGame5.jpg"
                                    alt=""
                                />
                            </GridItem>

                            <GridItem rowSpan={1} colSpan={3}>
                                <Image
                                    src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/Homepage_FitnessGame2.jpg"
                                    alt=""
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
};

export default LandingPage;
