import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router';
import {
  Button, FormControl, Input, FormLabel, Flex, Heading, DarkMode,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { createAccount } from '../../actions';

function CreateAccount(props) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [role, setRole] = useState('');
  const [year, setYear] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;
  const { email } = user;

  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      photo,
      role,
      year,
      email,
    };
    props.createAccount(user.uid, newUser, navigate);
  };

  if (user) {
    return (
      <Flex flexDir="column" gridGap={4} w="400px" ml="auto" mr="auto">
        <Heading>Create Account</Heading>
        <form onSubmit={handleCreateAccount}>
          <Flex flexDir="column" gridGap={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input onChange={(e) => setName(e.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Profile Picture URL</FormLabel>
              <Input onChange={(e) => setPhoto(e.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Role</FormLabel>
              <Input onChange={(e) => setRole(e.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Year</FormLabel>
              <Input onChange={(e) => setYear(e.currentTarget.value)} />
            </FormControl>
            <Flex>
              <DarkMode>
                <Button type="submit" fontWeight={400}>Create</Button>
              </DarkMode>
            </Flex>
          </Flex>
        </form>
      </Flex>
    );
  } else {
    console.log('not signed in');
    return (
      <Navigate replace to="/signup" />
    );
  }
}

export default connect(null, { createAccount })(CreateAccount);
