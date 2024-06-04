import { Container, Text, VStack, Heading, Box, Button, Flex, Spacer } from "@chakra-ui/react";

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
      <Spacer />
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" py={4} bg="gray.700" color="white" width="100%">
    <Container maxW="container.md">
      <Flex justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} Invoicing Software. All rights reserved.</Text>
        <Spacer />
        <Text>Contact Us</Text>
      </Flex>
    </Container>
  </Box>
);

export default Index;