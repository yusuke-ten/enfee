import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '.';

const links = [
  { text: 'レビュー', to: '/' } as const,
  { text: 'コミュニティ', to: '/communites' } as const,
  { text: 'メッセージ', to: '/messages' } as const,
];

storiesOf('molecules/Navigation', module).add('default', () => (
  <Router>
    <Navigation links={links} />
  </Router>
));
