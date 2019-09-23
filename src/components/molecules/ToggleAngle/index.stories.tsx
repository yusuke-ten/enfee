import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleAngle from '.';

storiesOf('molecules/ToggleAngle', module)
  .add('down', () => <ToggleAngle text="3件の返信を表示" iconType="down" />)
  .add('up', () => <ToggleAngle text="返信を非表示" iconType="up" />);
