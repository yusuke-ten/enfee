import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '.';

storiesOf('organisms/Header', module).add('default', () => (
  <Router>
    <Header />
  </Router>
));
