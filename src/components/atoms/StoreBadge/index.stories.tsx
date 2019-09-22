import React from 'react';
import { storiesOf } from '@storybook/react';
import StoreBadge from '.';

storiesOf('atoms/StoreBadge', module)
  .add('small', () => <StoreBadge store="セブン-イレブン" size="small" />)
  .add('medium', () => <StoreBadge store="セブン-イレブン" size="medium" />);
