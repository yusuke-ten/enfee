import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import LoginForm from '.';

storiesOf('organisms/LoginForm', module).add('default', () => (
  <Router>
    <LoginForm
      emailValue={text('emailValue', '')}
      passwrodValue={text('passwordValue', '')}
      emailValidationError={text('emailValidationError', '')}
      passwordValidationError={text('passwordValidationError', '')}
      onChangeEmail={() => {}}
      onChangePassword={() => {}}
      onSubmit={() => {}}
      disabledSubmitButton={boolean('disabledSubmitButton', false)}
      isLoading={boolean('isLoading', false)}
      error={text('error', '')}
      isError={boolean('isError', false)}
    />
  </Router>
));
