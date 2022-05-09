import React from 'react';
import {
  Flex, Text, Image, Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IoHeartOutline } from 'react-icons/io5';

function PostCard(props) {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      w="600px"
      minH="150px"
      flexDir="column"
      m={2}
      _hover={{
        background: '#1C1C1D',
        borderColor: '#595567',
        transform: 'translateY(-2px)',
      }}
      transition="0.2s ease all"
    >
      <Image src={props.post.imageURL} objectFit="contain" borderTopRadius="lg" />
      <Flex p={6} flexDir="column" gridGap={2}>
        <Flex flexDir="row" gridGap={4} mb={4} alignItems="center">
          <Image w="40px" h="40px" borderRadius="100%" objectFit="cover" src={props.post.author.photo} />
          <Text>{props.post.author.name}</Text>
        </Flex>
        <Link to={props.id}>
          <Heading fontSize="2xl" fontWeight={500}>{props.post.title}</Heading>
        </Link>
        <Text>{props.post.content}</Text>
        <Flex alignItems="center" gridGap={2}>
          <Text>{props.post.likes}</Text>
          <IoHeartOutline fontSize="xl"
            w="10px"
            bg=""
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PostCard;
