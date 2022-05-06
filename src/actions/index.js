import axios from 'axios';

// const JSON = 'public/data.json';

export const ActionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USER: 'FETCH_USER',
};

export function fetchUsers() {
  return (dispatch) => {
    axios.get('./data.json')
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USERS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function fetchUser(inputName) {
  return (dispatch) => {
    axios.get('./data.json')
      .then((response) => {
        const currentUser = response.data.filter((user) => user.name === inputName);
        dispatch({ type: ActionTypes.FETCH_USER, payload: currentUser[0] });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
