import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginPage from 'components/pages/LoginPage';

const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  </>
);

export default App;
