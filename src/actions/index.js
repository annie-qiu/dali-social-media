import axios from 'axios';
import * as db from '../services/datastore';

export const ActionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USER: 'FETCH_USER',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  LIKE_POST: 'LIKE_POST',
};

export function fetchUsers() {
  return (dispatch) => {
    axios.get('https://raw.githubusercontent.com/dali-lab/dali-challenges/master/data/DALI_Data.json')
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

export function fetchUserFirebase(userId) {
  return (dispatch) => {
    const fetch = async () => {
      await db.fetchUser(userId, (newUser) => {
        console.log('user state', newUser);
        dispatch({ type: ActionTypes.FETCH_USER, payload: newUser });
      });
    };
    fetch();
  };
}

export function createAccount(userId, user, navigate) {
  return (dispatch) => {
    const fetch = async () => {
      await db.createAccount(userId, user);
      navigate('/posts');
    };
    fetch();
  };
}

export function updateProfile(userId, fields, navigate) {
  return (dispatch) => {
    const fetch = async () => {
      await db.updateProfile(userId, fields);
      navigate('/profile');
    };
    fetch();
  };
}

export function createPost(post, navigate) {
  return (dispatch) => {
    const fetch = async () => {
      await db.writePost(post);
      navigate('/posts');
    };
    fetch();
  };
}

export function updatePost(postId, fields) {
  return (dispatch) => {
    const fetch = async () => {
      await db.updatePost(postId, fields);
    };
    fetch();
  };
}

export function deletePost(postId, navigate) {
  return (dispatch) => {
    const fetch = async () => {
      await db.deletePost(postId);
      navigate('/posts');
    };
    fetch();
  };
}

export function fetchPosts() {
  return (dispatch) => {
    const fetch = async () => {
      await db.fetchPosts((newPosts) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: newPosts });
      });
    };
    fetch();
  };
}

export function fetchPost(postId) {
  return (dispatch) => {
    const fetch = async () => {
      await db.fetchPost(postId, (newPost) => {
        dispatch({ type: ActionTypes.FETCH_POST, payload: newPost });
      });
    };
    fetch();
  };
}
