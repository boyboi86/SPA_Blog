import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
// Blog API from external source
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=API_KEY4Blog';

export function fetchPosts() {

const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
