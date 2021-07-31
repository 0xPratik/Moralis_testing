import { useState } from 'react';
import { useMoralis } from "react-moralis";
import { Stack,Box,Button,Heading,Text,Container,Input,Alert,AlertTitle,AlertDescription,CloseButton } from '@chakra-ui/react';



const LogIn = () => {
    const {login} = useMoralis();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState()
  
    return (
      <Stack spacing="0.5">
      <Input value={username} placeholder="UserName" onChange={(e) => setUsername(e.currentTarget.value)}  />
      <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <Button onClick={() => login(username,password)}>LogIn</Button>
      </Stack>
    )
  }
  const SignUp = () => {
    const {signup} = useMoralis();
    const [email,setEmail] = useState()
    const [username,setUsername] = useState();
    const [password,setPassword] = useState()
  
    return (
      <Stack spacing="0.5">
      <Input value={email} placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)}  />
      <Input value={username} placeholder="UserName" onChange={(e) => setUsername(e.currentTarget.value)}  />
      <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <Button onClick={() => signup(username,password,email)}>Sign Up</Button>
      </Stack>
    )
  }

export default function Auth() {
    const { authenticate, isAuthenticated,isAuthenticating,user,logout,authError } = useMoralis();
    return (
    <Stack spacing={6}>
    <Heading textAlign="center" mb={6} mt={4} fontFamily="cursive"> Welcome to Twitter Clone</Heading>
    {authError && (
      <Alert status="error">
        <AlertTitle mr={2}>Authentication Failed</AlertTitle>
        <AlertDescription>{authError.message}</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    )}
    <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate via MetaMask</Button>
    <Text fontWeight="bold" textAlign="center">OR</Text>
    <SignUp />
    <Text textAlign="center" fontWeight="bold" fontFamily="mono">OR</Text>
    <LogIn />
    </Stack>
    )
}
