import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import LoginForm from '.';

storiesOf('organisms/LoginForm', module).add('default', () => (
  <Router>
    <LoginForm
      emailValue={text('emailValue', '')}
      passwrodValue={text('passwordValue', '')}
      onChangeEmail={() => {}}
      onChangePassword={() => {}}
      onSubmit={() => {}}
    />
  </Router>
));
