// Complete the Index page component here
// Use chakra-ui
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState('');
  const toast = useToast();

  const handleAddTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTask = { id: Date.now(), text: input, isCompleted: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="lg"
        mb={4}
      />
      <Button onClick={handleAddTask} colorScheme="blue" mb={4}>Add Task</Button>
      <List spacing={3}>
        {tasks.map(task => (
          <ListItem key={task.id} d="flex" alignItems="center">
            <ListIcon
              as={task.isCompleted ? FaCheckCircle : FaRegCircle}
              color={task.isCompleted ? 'green.500' : 'gray.500'}
              onClick={() => handleToggleTaskCompletion(task.id)}
              cursor="pointer"
            />
            <Box flex="1" as="span" ml={2} textDecoration={task.isCompleted ? 'line-through' : 'none'}>
              {task.text}
            </Box>
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleDeleteTask(task.id)}
              colorScheme="red"
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;