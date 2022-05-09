// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Flex, Heading } from '@chakra-ui/react';
import { fetchUsers } from '../../actions';
import UserCard from './UserCard';
// import Search from './Search';
// import usersData from '../../../public/data.json';

function People(props) {
  // const [filter, setFilter] = useState('');
  // const [currentUsers, setCurrentUsers] = useState([]);

  // const setUsers = () => {
  //   if (props.users) {
  //     if (filter) {
  //       // if search term exists and matches a tag, show filtered posts
  //       const filteredUsers = props.users.filter((user) => user.name.toLowerCase().includes(filter));
  //       console.log('filteredUsers', filteredUsers);
  //       if (Object.entries(filteredUsers).length !== 0) setCurrentUsers(filteredUsers.map((user) => <UserCard user={user} />));
  //       // if search term exists but doesn't match a tag, show all posts
  //       else {
  //         setCurrentUsers(props.users.map((user) => <UserCard user={user} />));
  //       }
  //     } else { // if user isn't searching, show all posts
  //       setCurrentUsers(props.users.map((user) => <UserCard user={user} />));
  //     }
  //   }
  // };

  useEffect(() => {
    // props.fetchUsers().then(() => {
    //   setUsers();
    // });
    // const fetch = async () => {
    //   await props.fetchUsers();
    //   setUsers();
    // };
    // fetch();

    props.fetchUsers();
    // setUsers();
  }, []);

  // const handleFilter = (tag) => {
  //   console.log('hi');
  //   // setFilter(tag);
  // };

  if (Object.entries(props.users).length !== 0) {
    console.log(props.users);
    const users = props.users.map((user) => <UserCard user={user} />);
    return (
      <Flex flexDir="column" w="1000px">
        <Heading fontWeight={400}>Members</Heading>
        {/* <Search filter={handleFilter} /> */}
        <Flex
          wrap="wrap"
          m={10}
          justify="center"
        >
          {users}
        </Flex>
      </Flex>
    );
  } else {
    return (<div>Loading</div>);
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all,
  };
}

export default connect(mapStateToProps, { fetchUsers })(People);
