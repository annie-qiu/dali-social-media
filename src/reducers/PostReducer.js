/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  likes: 0,
};

const PostsReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.LIKE_POST:
      draftState.current += 1;
      break;
    case ActionTypes.UNLIKE_POST:
      console.log('fetch posts');
      draftState.current -= 1;
      break;
    default:
      break;
  }
}, initialState);

export default PostsReducer;
