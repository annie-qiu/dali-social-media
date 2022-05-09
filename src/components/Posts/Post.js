/* eslint-disable new-cap */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Flex, Text, DarkMode, IconButton, Image, Button, Heading,
} from '@chakra-ui/react';
import { IoChevronBackOutline, IoHeartOutline } from 'react-icons/io5';
import {
  fetchPost, deletePost, updatePost, updateProfile,
} from '../../actions/index';
import { auth } from '../../services/firebase';
import * as db from '../../services/datastore';

const Post = (props) => {
  const user = auth.currentUser;
  const [liked, setLiked] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const id = useParams().postID;
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      await props.fetchPost(id);
      await db.fetchLikes(user.uid, (posts) => {
        console.log('post', posts);
        setLikedPosts(posts);
      });
    };
    fetch();
  }, []);

  const handleBack = () => {
    navigate('/posts');
  };

  const handleDelete = () => {
    props.deletePost(id, navigate);
  };

  const handleLike = () => {
    const fetch = async () => {
      await setLiked(likedPosts[id]);
      setLiked(!liked);
      if (liked && likedPosts[id]) {
        props.updatePost(id, { likes: props.currentPost.likes - 1 });
        db.updateLikes(user.uid, id, false);
      } else {
        props.updatePost(id, { likes: props.currentPost.likes + 1 });
        db.updateLikes(user.uid, id, true);
      }
    };
    fetch();
  };

  if (props.currentPost && props.currentPost.author) {
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
          <Flex flexDir="column" p={8} mb={4} gridGap={2}>
            <Flex flexDir="row" gridGap={4} mb={4} alignItems="center">
              <Image w="40px" h="40px" borderRadius="100%" src={props.currentPost.author.photo} />
              <Text>{props.currentPost.author.name}</Text>
            </Flex>
            <Heading mb={2}
              fontSize="4xl"
              fontWeight="normal"
            >
              {props.currentPost.title}
            </Heading>
            <Text>
              {props.currentPost.content}
            </Text>
            <Flex alignItems="center" gridGap={2}>
              <Text>{props.currentPost.likes}</Text>
              <IoHeartOutline fontSize="xl"
                w="10px"
                bg=""
              />
            </Flex>
            <Flex>
              <DarkMode>
                { liked
                  ? (<Button leftIcon={<IoHeartOutline />} onClick={handleLike}>Unlike</Button>)
                  : (<Button leftIcon={<IoHeartOutline />} onClick={handleLike}>Like</Button>)}
              </DarkMode>
            </Flex>
            <Flex>
              <DarkMode>
                <Button type="button" onClick={handleDelete}>Delete</Button>
              </DarkMode>
            </Flex>
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
  currentUser: state.users.current,
});

export default connect(mapStateToProps, {
  fetchPost, deletePost, updatePost, updateProfile,
})(Post);
