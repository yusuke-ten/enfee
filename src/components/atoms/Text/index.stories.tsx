import React from 'react';
import { storiesOf } from '@storybook/react';
import Txt, { InfoTxt, WarnTxt } from '.';

storiesOf('atoms/Text', module)
  .add('defualt', () => <Txt>テキストです！！！</Txt>)
  .add('info', () => <InfoTxt>テキストです！！！</InfoTxt>)
  .add('warn', () => <WarnTxt>テキストです！！！</WarnTxt>);
