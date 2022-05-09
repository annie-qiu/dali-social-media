import React, { useCallback, useState } from 'react';
import {
  getAuth, createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Button, FormControl, Input, FormLabel, Flex, Heading, DarkMode, Alert,
} from '@chakra-ui/react';
import { app } from '../../services/firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');

  const auth = getAuth(app);
  auth.languageCode = 'it';
  const navigate = useNavigate();

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/create-account');
    } catch (error) {
      setError(error.code);
      alert(error);
    }
  });

  const renderError = () => {
    if (errorMessage) {
      console.log('error', errorMessage);
      return (
        <Alert status="error">
          {errorMessage}
        </Alert>
      );
    } else {
      return null;
    }
  };

  return (
    <Flex flexDir="column" gridGap={4} w="400px" ml="auto" mr="auto">
      <Heading>Sign Up</Heading>
      <form onSubmit={handleSignUp}>
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
              <Button type="submit" fontWeight={400}>Sign Up</Button>
            </DarkMode>
          </Flex>
          <Flex>
            <Link to="/">
              <DarkMode>
                <Button type="button" fontWeight={400}>Log In</Button>
              </DarkMode>
            </Link>
          </Flex>
          {renderError}
        </Flex>
      </form>
    </Flex>
  );
}

export default SignUp;
