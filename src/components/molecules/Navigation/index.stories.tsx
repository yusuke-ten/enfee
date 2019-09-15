import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import Navigation from '.';

const links = [
  { text: 'レビュー', to: '/' },
  { text: 'コミュニティ', to: '#' },
  { text: 'メッセージ', to: '#' },
];

storiesOf('molecules/Navigation', module).add('default', () => (
  <Router>
    <Navigation links={links} />
  </Router>
));
