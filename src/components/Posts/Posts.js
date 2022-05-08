import React, { useEffect } from 'react';
import {
  Flex, Heading,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import PostCard from './PostCard';
import { fetchPosts, deletePost } from '../../actions';

function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  let currentPosts = null;

  if (props.posts) {
    currentPosts = Object.entries(props.posts).map((post) => {
      return <PostCard post={post[1]} id={post[0]} />;
    });
  }

  if (Object.entries(props.posts).length !== 0) {
    return (
      <Flex flexDir="column" maxW="800px">
        <Heading mb={4} fontWeight={400}>Feed</Heading>
        <Flex flexDir="column-reverse" alignItems="center">
          {currentPosts}
        </Flex>
      </Flex>
    );
  } else {
    return (<div>Loading</div>);
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
