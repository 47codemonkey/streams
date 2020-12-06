import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const UserPostsPage = lazy(() => import('../pages/UserPostsPage'));

const stylesForLoading = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const App = () => (
  <div>
    <Suspense fallback={<h1 style={stylesForLoading}>Loading...</h1>}>
      <Switch>
        <Route path="/user/:userId" exact component={UserPostsPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
