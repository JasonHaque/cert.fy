import { Box, Button, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Card from '../Card/Card';

const About = () => {
  return (
    <Container maxW="container.xl" py="10">
      <SimpleGrid columns={[1, 2]} gap={[5, 10]}>
        <Box my="auto">
          <Heading size="xl">
            AttoEarth resolves land disputes in an unprecedented manner that opens up novel
            innovations in the world of blockchain protocols.
          </Heading>
          <Text mt="5">
            We implement geometric computations using highly efficient gas preserving techniques,
            store land polygons and geometry information on the blockchain, which provides
            transparent and verifiable records for potential conflict zones. By a multi-party voting
            mechanism, potential conflicts are resolved, and land measurements by independent
            validators are taken into account during the voting process.
          </Text>
          <Box mt="5">
            <Button variant="outline" mr="5">
              Learn More
            </Button>
            <Button variant="outline">FAQ</Button>
          </Box>
        </Box>
        <Box ml="auto">
          <Box position="relative">
            <Box
              w="100px"
              h="100px"
              bg="pink.100"
              pos="absolute"
              zIndex={-2}
              filter="blur(100px)"
              left="-5"
              top="-5"
            />
            <Card hoverEffect={false} />
            <Box
              w="100px"
              h="100px"
              bg="cyan.100"
              pos="absolute"
              zIndex={-2}
              filter="blur(100px)"
              right="-5"
              bottom="-5"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default About;
