import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
// Blog API from external source
const BASE_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=API_KEY4Blog';

export function fetchPosts() {

const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {

  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}
