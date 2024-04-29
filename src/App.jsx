import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";
import CompletedTodos from './pages/CompletedTodos.jsx';

function App() {
  return (
    <>
      <Box as="header" bg="brand.900" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold" color="white">Todo App</Text>
          <Flex>
            <Link href="/" p={2} color="white" _hover={{ textDecoration: 'underline' }}>Home</Link>
            <Link href="/completed-todos" p={2} color="white" _hover={{ textDecoration: 'underline' }}>Completed Todos</Link>
            
          </Flex>
        </Flex>
      </Box>
      <Router>
        <Box pt={16}>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/completed-todos" element={<CompletedTodos todos={[]} />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}

export default App;