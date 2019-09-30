import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Field from '.';

storiesOf('molecules/Field', module)
  .add('default', () => (
    <Field
      value={text('value', '')}
      onChangeHandler={() => {}}
      placeholder="メールアドレス"
      isError={boolean('isError', false)}
      validationError={text('validationError', '')}
    />
  ))
  .add('hasValidationError', () => (
    <Field
      value={text('value', '')}
      onChangeHandler={() => {}}
      placeholder="メールアドレス"
      isError={boolean('isError', false)}
      validationError={text('validationError', '6文字以上で入力してください')}
    />
  ));
