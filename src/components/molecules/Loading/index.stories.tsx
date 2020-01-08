import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '.';

storiesOf('molecules/Loading', module)
  .add('Loading with header', () => <Loading />)
  .add('Loading fullHeight', () => <Loading fullHeight />);
