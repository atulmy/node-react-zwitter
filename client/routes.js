import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/pages/home';
import TweetPage from './components/pages/tweet';
import UserLogin from './components/user/login';
import UserRegister from './components/user/register';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="tweet" component={ TweetPage } />
        <Route path="login" component={ UserLogin } />
        <Route path="register" component={ UserRegister } />
    </Route>
)