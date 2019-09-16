import React from 'react';
import { storiesOf } from '@storybook/react';
import StoreBadge from '.';

storiesOf('atoms/StoreBadge', module)
  .add('small', () => <StoreBadge store="sevenEleven" size="small" />)
  .add('medium', () => <StoreBadge store="sevenEleven" size="medium" />);
