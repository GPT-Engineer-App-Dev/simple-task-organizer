import React from 'react';
import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const CompletedTodos = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.isCompleted);

  if (completedTasks.length === 0) {
    return (
      <Box p={5} textAlign="center">
        <Text fontSize="xl">No completed tasks yet!</Text>
      </Box>
    );
  }

  return (
    <Box p={5}>
      <List spacing={3}>
        {completedTasks.map(task => (
          <ListItem key={task.id} d="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text ml={2} textDecoration="line-through">{task.text}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CompletedTodos;