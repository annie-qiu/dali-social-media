/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PostsReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      // eslint-disable-next-line prefer-destructuring
      draftState.current = action.payload;
      break;
    case ActionTypes.FETCH_POSTS:
      // eslint-disable-next-line prefer-destructuring
      draftState.all = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default PostsReducer;
