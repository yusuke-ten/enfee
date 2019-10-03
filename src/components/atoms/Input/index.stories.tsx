import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import TextInput from './TextInput';
import TextArea from './TextArea';

storiesOf('atoms/Input', module)
  .add('TextInput', () => (
    <Wrapper>
      <TextInput
        placeholder="メールアドレス"
        value={text('value', '')}
        onChangeHandler={() => {}}
        isError={boolean('isError', false)}
      />
    </Wrapper>
  ))
  .add('TextArea', () => (
    <Wrapper>
      <TextArea
        placeholder="レビュー内容を入力してください"
        value={text('value', '')}
        handleChage={() => {}}
        isError={boolean('isError', false)}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 500px;
`;
