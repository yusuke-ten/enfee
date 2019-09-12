import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';

storiesOf('atoms/Input', module).add('textInput', () => (
  <Input type="inputText" value="" onChangeHandler={() => {}} />
));
