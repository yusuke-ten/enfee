import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ReviewPage, LoginPage } from 'components/pages';
import EntranceTemplate from 'components/templates/EntranceTemplate';

const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/entrance" component={EntranceTemplate} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={ReviewPage} />
    </Switch>
  </>
);

export default App;
