import React from 'react';
import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const CompletedTodos = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTasks(storedCompletedTasks.filter(task => task.isCompleted));
  }, []);

  if (tasks.length === 0) {
    return (
      <Box p={5} textAlign="center">
        <Text fontSize="xl" color="gray.500">You have not completed any tasks yet.</Text>
      </Box>
    );
  }

  return (
    <Box p={5}>
      <List spacing={3}>
        {tasks.map(task => (
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