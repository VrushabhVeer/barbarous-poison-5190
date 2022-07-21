import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const TheApp = () => {
  return (
    <div>
      <Container textAlign="left" maxW="80%" mt="3rem">
        <Box>
          <Text textStyle="h1">OUR APP</Text>
          <Box textStyle="RedBorder"></Box>
          <Text textStyle="p">
            SparkAmerica is powered by the PeopleOne Health app, a world-class
            technology platform created by our experienced team responsible for
            developing we ready interfaces and apps that received more than 50
            million annual visitors with high engagement levels. It's designed
            to be intuitive and user friendly, and makes it easy to participate
            in SparkAmerica challenges, users can track their progress, get
            access to helpful resources, and view community information like
            leaderboards and updates.
          </Text>
        </Box>

        <Flex gap="20" mt="4rem">
          <Box w="40%">
            <Image
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_FitnessGameMain.jpg"
              alt=""
            />
          </Box>

          <Box w="48%">
            <Text textStyle="h1">THE PEOPLEONE HEALTH APP WEBSITE</Text>
            <Text textStyle="p">
              The PeopleOne Health App Website is a feature rich technology tool
              used to do things like :
            </Text>
            <UnorderedList m="2rem">
              <ListItem>Track user progress during challenges</ListItem>
              <ListItem>
                Receive updates and access resources like helpful articles and
                videos that can boost your health journey
              </ListItem>
              <ListItem>
                View Leaderboards during challenges that incorporate friendly
                competition
              </ListItem>
              <ListItem>
                Access the Fitness Game and track daily habits and goals
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>

        <Flex gap="20" mt="4rem">
          <Box w="55%">
            <Text textStyle="h1">THE PEOPLEONE HEALTH MOBILE APP</Text>
            <Text textStyle="p">
              SparkAmerica participants can also use the PeopleOne Health Mobile
              app to track their progress during challenges. The app can be
              downloaded for free for both iPhone and Android devices from the
              iOS App Store or the Google App Store, and utilizes the same
              easy-to-use features and amazing resources as the desktop portal.
            </Text>
            <Text textStyle="p">
              Additionally, the PeopleOne Health app syncs with:
            </Text>
            <UnorderedList m="2rem">
              <ListItem>Apple Health</ListItem>
              <ListItem>Google Fit</ListItem>
              <ListItem>FitBit</ListItem>
            </UnorderedList>
            <Text textStyle="p">
              This feature makes it more convenient to log Active Minutes. Users
              can also manually enter their minutes and activities in the
              Fitness Game.
            </Text>
          </Box>
          <Box w="40%">
            <Image
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_AppHomeScreen.jpg"
              alt=""
            />
          </Box>
        </Flex>

        <Flex gap="20" mt="4rem">
          <Box w="35%">
            <Image
              ml="5rem"
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_FitnessGameMobile.jpg"
              alt=""
            />
          </Box>

          <Box w="50%">
            <Text textStyle="h1">THE FITNESS GAME</Text>
            <Text textStyle="p">
              The Fitness Game lives inside of the PeopleOne Health portal to
              help users see their progress in a fun and convenient format.
              Every day the game will sync with your mobile health app or you
              can enter your Active Minutes manually. It's as easy as putting in
              the number of minutes, the Activity Description, and hitting the
              Add Minutes button. Then "Pow!", you'll see your minutes added and
              as you scroll down you can also see your history and activity
              streaks.
            </Text>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default TheApp;
