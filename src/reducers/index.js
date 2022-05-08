// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';
import UsersReducer from './UsersReducer';
import PostsReducer from './PostsReducer';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  post: PostReducer,
});

export default rootReducer;
