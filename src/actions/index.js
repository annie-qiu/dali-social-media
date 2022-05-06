// import axios from 'axios';

const JSON = 'public/data.json';

export const ActionTypes = {
  FETCH_USERS: 'FETCH_USERS',
};

export function fetchUsers() {
  return (dispatch) => {
    fetch(JSON)
      .then((response) => {
        console.log('response', response.json());
        dispatch({ type: ActionTypes.FETCH_USERS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
