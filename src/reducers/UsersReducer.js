/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const UsersReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      console.log('fetch user payload', action.payload);
      // eslint-disable-next-line prefer-destructuring
      draftState.current = action.payload;
      break;
    case ActionTypes.FETCH_USERS:
      // eslint-disable-next-line prefer-destructuring
      draftState.all = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default UsersReducer;
