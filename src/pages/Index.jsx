import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Invoicing Software</Heading>
        <Text fontSize="lg">Welcome to your invoicing software. Start creating and managing your invoices efficiently.</Text>
        <Box>
          <Button colorScheme="teal" size="lg" mt={4}>Get Started</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;