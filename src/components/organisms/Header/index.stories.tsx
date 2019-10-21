import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter as Router } from 'react-router-dom';
import { myProfile } from 'services/mocks';
import Header from '.';

const navLinks = [
  { text: 'レビュー', to: '/', isShow: true } as const,
  { text: 'コミュニティ', to: '/communites', isShow: true } as const,
  { text: 'メッセージ', to: '/messages', isShow: true } as const,
];

storiesOf('organisms/Header', module).add('default', () => (
  <Router>
    <Header
      myProfile={myProfile}
      isLoggedIn
      handleLogout={action('handleLogout')}
      navLinks={navLinks}
    />
  </Router>
));
