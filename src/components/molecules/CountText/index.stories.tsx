import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import CountText from '.';

storiesOf('molecules/CountText', module).add('default', () => (
  <CountText text={text('text', 'コメント')} count={number('count', 20)} />
));
