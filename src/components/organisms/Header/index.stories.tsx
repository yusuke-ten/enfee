import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter as Router } from 'react-router-dom';
import { myProfile } from 'services/mocks';
import Header from '.';

storiesOf('organisms/Header', module).add('default', () => (
  <Router>
    <Header
      myProfile={myProfile}
      isLoggedIn
      handleLogout={action('handleLogout')}
    />
  </Router>
));
