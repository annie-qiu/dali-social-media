import React from 'react';
// import { connect } from 'react-redux';
import { Flex } from '@chakra-ui/react';
// import { fetchUsers } from '../../actions';
import UserCard from './UserCard';
import usersData from '../../../public/data.json';

function People(props) {
  console.log('users', usersData);
  const users = usersData.map((user) => <UserCard user={user} />);
  return (
    <Flex className="users-container"
      wrap="wrap"
      justify="center"
      m={10}
    >
      {users}
    </Flex>
  );
}

export default People;
