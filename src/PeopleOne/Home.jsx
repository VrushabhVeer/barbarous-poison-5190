import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  return (
    <div>
        
            <Flex maxW="100%" borderTop="1px solid" mt="1rem">
                <Box>
                    <Sidebar />
                </Box>
                <Box></Box>
            </Flex>

    </div>
  )
}

export default Home;