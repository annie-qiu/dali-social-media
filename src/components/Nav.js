import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Flex, Heading, DarkMode, Button,
} from '@chakra-ui/react';
import SignOut from './Auth/SignOut';

function Nav() {
  return (
    <Flex p={6}
      w="200px"
      flexDir="column"
      gridGap={3}
      borderRight="1px"
      borderColor="#333338"
    >
      <Heading mt={2} mb={2} fontWeight={600} fontSize="2xl">DALI Net</Heading>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <Flex>
        <Link to="/create-post">
          <DarkMode>
            <Button type="button" fontWeight={400}>Create Post</Button>
          </DarkMode>
        </Link>
      </Flex>
      <Flex>
        <SignOut />
      </Flex>
    </Flex>
  );
}

export default Nav;
