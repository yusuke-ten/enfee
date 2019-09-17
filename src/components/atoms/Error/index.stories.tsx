import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldError } from '.';

storiesOf('atoms/Error', module).add('FieldError', () => (
  <FieldError>メールアドレスではありません</FieldError>
));
