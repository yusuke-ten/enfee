import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { SignupPage, ReviewPostPage } from 'components/pages';
import { LoginPageContainer, ReviewsPageContainer } from 'containers/pages';

const NotFound = () => <div>not found</div>;

const App: React.FC = () => (
  <Switch>
    <Route path="/login" component={LoginPageContainer} exact />
    <Route path="/signup" component={SignupPage} exact />
    <Route path="/reviews/new" component={ReviewPostPage} exact />
    <Route path="/reviews/:store" component={ReviewsPageContainer} exact />
    <Route
      path="/"
      exact
      render={({ match }) => <Redirect to="/reviews/all" />}
    />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default App;
