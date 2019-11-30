import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import paths from 'src/paths';
import {
  LoginPage,
  SignupPage,
  ReviewsPage,
  ReviewPostPage,
} from 'containers/pages';

const NotFound = () => <div>not found</div>;

// TODO: reviewsページのルーティングを`/`に修正したい
const App: React.FC = () => (
  <Switch>
    <Route path={paths.login} component={LoginPage} exact />
    <Route path={paths.signup} component={SignupPage} exact />
    <Route path={paths.reviewPost} component={ReviewPostPage} exact />
    <Route path="/reviews" component={ReviewsPage} exact />
    <Route path={paths.reviews} component={ReviewsPage} exact />
    <Route path="/" exact render={({ match }) => <Redirect to="/reviews" />} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default App;
