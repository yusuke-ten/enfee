import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('atoms/Icon', module)
  .add('yummy', () => <Icon icon="yummy" />)
  .add('treasure', () => <Icon icon="treasure" />);
