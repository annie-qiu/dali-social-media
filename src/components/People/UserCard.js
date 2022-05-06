import React from 'react';
import {
  Image, Flex, Text,
} from '@chakra-ui/react';

function UserCard(props) {
  console.log(props.user);
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
      <Image src={props.user.picture}
        objectFit="cover"
        w="200px"
        h="200px"
        borderTopRadius="md"
      />
      <Flex p={4} flexDir="column" w="100%">
        <Text fontSize="lg">{props.user.name}</Text>
        <Flex gridGap={1}>
          <Text fontSize="sm" color="#6A686E">{props.user.role}</Text>
          <Text fontSize="sm" color="#6A686E">{props.user.year}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UserCard;
