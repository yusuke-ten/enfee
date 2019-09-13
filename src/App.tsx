import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginFormContainer from 'containers/organisms/LoginFormContainer';

const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
    </Switch>
  </>
);

export default App;
