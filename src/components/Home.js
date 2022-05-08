/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Flex, Box } from '@chakra-ui/react';
import People from './People/People';
import UserView from './People/UserView';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import Create from './Posts/CreatePost';
import SignUp from './Profile/SignUp';
import CreateAccount from './Profile/CreateAccount';
import Nav from './Nav';
import Login from './Profile/Login';
import { auth } from '../services/firebase';

const Home = (props) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/');
  }, [user, loading]);

  return (
    <BrowserRouter>
      <Flex>
        <Nav />
        <Box p={10}>
          <Routes>
            <Route path="/people" element={<People />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postID" element={<Post />} />
            <Route path="/:userID" element={<UserView />} />
            <Route path="/create-post" element={<Create />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  );
};

export default Home;
