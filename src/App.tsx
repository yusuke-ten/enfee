import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ReviewPage, LoginPage } from 'components/pages';

import Spinner from 'components/atoms/Spinner';

const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={ReviewPage} exact />
    </Switch>
  </>
);

export default App;
