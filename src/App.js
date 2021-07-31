import './App.css';
import { useState } from 'react';
import { useMoralis } from "react-moralis";
import Auth from "./Auth"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import Profile from "./Profile"
import { Stack,Box,Button,Heading,Text,Container,Input,Alert,AlertTitle,AlertDescription,CloseButton } from '@chakra-ui/react';

function App() {
  const {  isAuthenticated,user,logout } = useMoralis();
  return (
    <Container>
      {isAuthenticated && (
        <Box>
          <Heading color="blackAlpha.800" fontFamily="fantasy" mt={4}>Hey, Welcome to Twitter Clone</Heading>
          <Heading color="green.600">{user.get("username")}</Heading>
          <Button mt={2} onClick={() => logout()} variant="solid" colorScheme="twitter">Logout</Button>
        </Box>
      )}
      {!isAuthenticated && (
        <Auth />
      )}
          <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
    </Container>
  );
}
export default App;
