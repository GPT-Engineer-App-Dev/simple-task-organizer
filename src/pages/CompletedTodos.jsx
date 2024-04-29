import React from 'react';
import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const CompletedTodos = ({ todos }) => {
  const completedTodos = todos.filter(todo => todo.isCompleted);

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Completed Tasks</Text>
      <List spacing={3}>
        {completedTodos.length > 0 ? completedTodos.map(todo => (
          <ListItem key={todo.id} d="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Box as="span" ml={2} textDecoration="line-through">
              {todo.text}
            </Box>
          </ListItem>
        )) : <Text>No completed tasks.</Text>}
      </List>
    </Box>
  );
};

export default CompletedTodos;