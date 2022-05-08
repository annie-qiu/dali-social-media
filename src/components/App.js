/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import SignUp from './Auth/SignUp';
import CreateAccount from './Auth/CreateAccount';
import Login from './Auth/Login';
import People from './People/People';
import UserView from './People/UserView';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import Create from './Posts/CreatePost';
import ProtectedRoute from './Auth/ProtectedRoute';
import Nav from './Nav';
import Profile from './Auth/Profile';
import EditProfile from './Auth/EditProfile';

const App = (props) => {
  return (
    <BrowserRouter>
      <Flex>
        <Nav />
        <Box p={10}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:postID" element={<Post />} />
              <Route path="/:userID" element={<UserView />} />
              <Route path="/people" element={<People />} />
              <Route path="/create-post" element={<Create />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
            </Route>
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  );
};

export default App;
