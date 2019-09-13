import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import LoginForm from '.';

storiesOf('organisms/LoginForm', module).add('default', () => (
  <Router>
    <LoginForm />
  </Router>
));
