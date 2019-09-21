import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/index';
import SignupPage from '.';

storiesOf('pages/SignupPage', module)
  .addDecorator(story => (
    <Router initialEntries={['/signup']}>{story()}</Router>
  ))
  .add('default', () => (
    <Provider store={store}>
      <SignupPage />
    </Provider>
  ));
