import React from 'react';
import {
  Image, Flex, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function UserCard(props) {
  // turns user's name into string that can be used in url
  const userId = (props.user.name).replace(/ /g, '-');

  return (
    <Flex
      borderWidth="1px"
      borderRadius="md"
      flexDir="column"
      m={2}
      w="200px"
      _hover={{
        background: '#1C1C1D',
        borderColor: '#595567',
        transform: 'translateY(-2px)',
      }}
      transition="0.2s ease all"
    >
      <Link to={`/${userId}`}>
        <Image src={props.user.picture}
          objectFit="cover"
          w="200px"
          h="200px"
          borderTopRadius="md"
        />
        <Flex p={4} flexDir="column" w="100%">
          <Text fontSize="lg">{props.user.name}</Text>
          <Flex gridGap={1} wrap="wrap">
            <Text fontSize="sm" color="#6A686E">{props.user.role}</Text>
            <Text fontSize="sm" color="#6A686E">{props.user.year}</Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}

export default UserCard;
