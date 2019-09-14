import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/index';
import LoginPage from '.';

storiesOf('pages/LoginPage', module)
  .addDecorator(story => <Router initialEntries={['/']}>{story()}</Router>)
  .add('default', () => (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  ));
