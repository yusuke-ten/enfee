import React from 'react';
import { storiesOf } from '@storybook/react';
import { Mock } from 'src/const';
import Paragraph from '.';

storiesOf('atoms/Paragraph', module).add('default', () => (
  <Paragraph>{Mock.longText}</Paragraph>
));
