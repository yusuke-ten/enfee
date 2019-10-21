import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '.';

const links = [
  { text: 'レビュー', to: '/', isShow: true } as const,
  { text: 'コミュニティ', to: '/communites', isShow: true } as const,
  { text: 'メッセージ', to: '/messages', isShow: true } as const,
];

storiesOf('molecules/Navigation', module).add('default', () => (
  <Router>
    <Navigation links={links} />
  </Router>
));
