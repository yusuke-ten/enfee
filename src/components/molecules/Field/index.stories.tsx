import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Field from '.';

storiesOf('molecules/Field', module).add('default', () => (
  <Field
    value={text('value', '')}
    onChangeHander={() => {}}
    placeholder="メールアドレス"
    isError={boolean('isError', false)}
  />
));
