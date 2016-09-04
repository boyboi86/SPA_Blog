import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new.js';

export default (
<Router path="/" component={App} >
  <IndexRoute component={PostsIndex} />
  <Route path="posts/new" component={PostsNew} />
  <Route path="" component={PostsShow} />
</Router>
);
