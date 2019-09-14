import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Label from '.';

storiesOf('atoms/Label', module)
  .add('show', () => <Label>メールアドレス</Label>)
  .add('with hidden', () => <Label isHidden>メールアドレス</Label>)
  .add('with error', () => <Label isError>メールアドレス</Label>);
