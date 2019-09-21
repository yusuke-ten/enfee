import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ReviewPage, LoginPage, SignupPage } from 'components/pages';

const App: React.FC = () => (
  <Switch>
    <Route path="/login" component={LoginPage} exact />
    <Route path="/signup" component={SignupPage} exact />
    <Route path="/" component={ReviewPage} exact />
  </Switch>
);

export default App;
