import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginPage from 'components/pages/LoginPage';

import Spinner from 'components/atoms/Spinner';

const App: React.FC = () => (
  <>
    <Spinner />
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  </>
);

export default App;
