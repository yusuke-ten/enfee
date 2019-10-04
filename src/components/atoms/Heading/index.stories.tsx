import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';

storiesOf('atoms/Heading', module).add('default', () => (
  <>
    <Heading type="h1">h1:これがタイトルです</Heading>
    <Heading type="h2">h2:これがタイトルです</Heading>
    <Heading type="h3">h3:これがタイトルです</Heading>
    <Heading type="h4">h4:これがタイトルです</Heading>
    <Heading type="h5">h5:これがタイトルです</Heading>
    <Heading type="h6">h6:これがタイトルです</Heading>
  </>
));
