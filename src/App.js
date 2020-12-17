import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Users from './containers/Users';
import Posts from './containers/Posts';
import Post from './containers/Post';

function App() {
  return (
    <div>
      <Switch>
        <Route path={'/users'} exact component={Users} />
        <Route path={'/posts'} exact component={Posts} />
        <Route path={'/post'} exact component={Post} />
        <Redirect to={'/users'}/>
      </Switch>
    </div>
     
  );
}

export default App;
