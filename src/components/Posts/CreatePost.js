/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import {
  Flex, Input, Button, Heading, DarkMode, FormControl, FormLabel, Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { createPost, fetchUserFirebase } from '../../actions';
import { auth } from '../../services/firebase';

const CreatePost = (props) => {
  const user = auth.currentUser;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchUserFirebase(user.uid);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('currentuser', props.currentUser);
    const post = {
      title,
      content,
      imageURL,
      author: props.currentUser,
      likes: 0,
    };
    console.log('post', post);
    props.createPost(post, navigate);
  };

  return (
    <Flex flexDir="column">
      <Heading mb={4} fontWeight={400}>Create Post</Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column" w="600px" gridGap={4}>
          <Flex>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => setTitle(e.currentTarget.value)} />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Textarea h="sm" onChange={(e) => setContent(e.currentTarget.value)} />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input onChange={(e) => setImage(e.currentTarget.value)} />
            </FormControl>
          </Flex>
          <Flex>
            <DarkMode>
              <Button fontWeight="normal" mt={2} type="submit" on>Submit</Button>
            </DarkMode>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.users.current,
});

export default connect(mapStateToProps, { createPost, fetchUserFirebase })(CreatePost);
