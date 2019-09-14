import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import TextInput from '.';

storiesOf('atoms/Input', module).add('textInput', () => (
  <Wrapper>
    <TextInput
      placeholder="メールアドレス"
      value=""
      onChangeHandler={() => {}}
      isError={boolean('isError', false)}
    />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 500px;
`;
