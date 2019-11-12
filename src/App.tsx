import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {
  LoginPage,
  SignupPage,
  ReviewsPage,
  ReviewPostPage,
} from 'containers/pages';

const NotFound = () => <div>not found</div>;

const App: React.FC = () => (
  <Switch>
    <Route path="/login" component={LoginPage} exact />
    <Route path="/signup" component={SignupPage} exact />
    <Route path="/reviews/new" component={ReviewPostPage} exact />
    <Route path="/reviews" component={ReviewsPage} exact />
    <Route path="/reviews/:store" component={ReviewsPage} exact />
    <Route path="/" exact render={({ match }) => <Redirect to="/reviews" />} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default App;
