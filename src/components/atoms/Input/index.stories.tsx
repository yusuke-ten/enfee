import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { TextInput } from '.';

storiesOf('atoms/Input', module).add('textInput', () => (
  <Wrapper>
    <TextInput
      placeholder="メールアドレス"
      value=""
      onChangeHandler={() => {}}
    />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 500px;
`;
