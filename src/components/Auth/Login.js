import React, {
  useCallback, useState, useEffect,
} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import {
  Button, FormControl, Input, FormLabel, Flex, Heading, DarkMode,
} from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      console.log('login user');
      navigate('/posts');
    }
  }, [user, loading]);

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/posts');
    } catch (errorMessage) {
      console.log(error);
    }
  });

  //   const renderError = () => {
  //     if (errorMessage) {
  //       console.log('error', errorMessage);
  //       return (
  //         <Alert status="error">
  //           {errorMessage}
  //         </Alert>
  //       );
  //     } else {
  //       return null;
  //     }
  //   };

  return (
    <Flex flexDir="column" gridGap={4} w="400px" ml="auto" mr="auto">
      <Heading>Log In</Heading>
      <form onSubmit={handleLogin}>
        <Flex flexDir="column" gridGap={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.currentTarget.value)} />
          </FormControl>
          <Flex>
            <DarkMode>
              <Button type="submit" fontWeight={400}>Log In</Button>
            </DarkMode>
          </Flex>
          <Flex>
            <Link to="/signup">
              <DarkMode>
                <Button type="button" fontWeight={400}>Sign Up</Button>
              </DarkMode>
            </Link>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}

export default Login;
