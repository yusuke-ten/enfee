import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage, SignupPage } from 'components/pages';
import { LoginPageContainer, ReviewPageContainer } from 'containers/pages';

const NotFound = () => <div>not found</div>;

const App: React.FC = () => (
  <Switch>
    <Route path="/login" component={LoginPageContainer} exact />
    <Route path="/signup" component={SignupPage} exact />
    <Route path="/reviews/:store" component={ReviewPageContainer} exact />
    <Route
      path="/"
      exact
      render={({ match }) => <Redirect to="/reviews/all" />}
    />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default App;
