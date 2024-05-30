import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text, Heading, Container, VStack } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const Index = () => {
  // Mock data representing users and their activity durations
  const leaderboardData = [
    { username: "Alice", duration: 120 },
    { username: "Bob", duration: 90 },
    { username: "Charlie", duration: 60 },
    { username: "Diana", duration: 45 },
  ];

  // Sort data by duration in descending order
  const sortedData = leaderboardData.sort((a, b) => b.duration - a.duration);

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl" textAlign="center">
          ActivityWatch Leaderboard <FaTrophy />
        </Heading>
        <Text>Check out the most dedicated trackers! This leaderboard shows the duration of activities tracked via ActivityWatch.</Text>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Username</Th>
                <Th isNumeric>Duration (minutes)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedData.map((user, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{user.username}</Td>
                  <Td isNumeric>{user.duration}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Container>
  );
};

export default Index;
