/* eslint-disable new-cap */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Flex, Text, DarkMode, IconButton, Image, Button, Heading,
} from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { fetchPost, deletePost } from '../../actions/index';

const Post = (props) => {
  const id = useParams().postID;
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchPost(id);
  }, []);

  const handleBack = () => {
    navigate('/posts');
  };

  const handleDelete = () => {
    props.deletePost(id, navigate);
  };

  if (props.currentPost) {
    return (
      <Flex
        justify="center"
        mb={12}
        ml={10}
        mr={10}
        flexDir={['column', 'column', 'row']}
      >
        <DarkMode>
          <IconButton fontSize="xl"
            borderWidth="1px"
            mr={4}
            mb={4}
            w="40px"
            bg=""
            icon={<IoChevronBackOutline />}
            onClick={handleBack}
          />
        </DarkMode>
        <Flex w={['100%', '100%', '1000px']}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          rounded="md"
          flexDir="column"
        >
          <Image src={props.currentPost.imageURL} w="100%" borderTopRadius={4} />
          <Flex flexDir="column" p={8} mb={4}>
            <Heading mb={2}
              fontSize="4xl"
              fontWeight="normal"
            >
              {props.currentPost.title}
            </Heading>
            <Text>
              {props.currentPost.content}
            </Text>
          </Flex>
          <Flex>
            <DarkMode>
              <Button type="button" onClick={handleDelete}>Delete</Button>
            </DarkMode>
          </Flex>
        </Flex>
      </Flex>
    );
  } else {
    return <div>Loading</div>;
  }
};

const mapStateToProps = (state) => ({
  currentPost: state.posts.current,
});

export default connect(mapStateToProps, { fetchPost, deletePost })(Post);
