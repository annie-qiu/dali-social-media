import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export function writePost(newPost) {
  firebase.database().ref('posts').push(newPost);
}

export function updatePost(postId, fields) {
  firebase.database().ref('posts').child(postId).update(fields);
}

export function deletePost(postId) {
  firebase.database().ref('posts').child(postId).remove(); // update similarly
}

export function fetchPosts(callback) {
  firebase.database().ref('posts').on('value', (snapshot) => {
    const newPosts = snapshot.val();
    callback(newPosts);
  });
}

export function fetchPost(postId, callback) {
  firebase.database().ref('posts').child(postId).on('value', (snapshot) => {
    const newPost = snapshot.val();
    callback(newPost);
  });
}

export function createAccount(userId, user) {
  firebase.database().ref('users').child(userId).set(user);
}

export function fetchUser(userId, callback) {
  firebase.database().ref('users').child(userId).on('value', (snapshot) => {
    const newUser = snapshot.val();
    callback(newUser);
  });
}

export function updateProfile(userId, fields) {
  console.log('child', userId);
  firebase.database().ref('users').child(userId).update(fields);
}
