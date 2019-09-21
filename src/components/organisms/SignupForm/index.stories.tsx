import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import SignupForm from '.';

storiesOf('organisms/SignForm', module).add('default', () => (
  <Router>
    <SignupForm
      emailValue={text('emailValue', '')}
      passwordValue={text('passwordValue', '')}
      passwordConfirmationValue={text('passwordConfirmationValue', '')}
      onChangeEmail={() => {}}
      onChangePassword={() => {}}
      onChangePasswordConfirmation={() => {}}
      onSubmit={() => {}}
      disabledSubmitButton={boolean('disabledSubmitButton', false)}
    />
  </Router>
));
