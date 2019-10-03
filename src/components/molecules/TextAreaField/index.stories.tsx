import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import TextAreaField from '.';

storiesOf('molecules/TextAreaField', module).add('TextInput', () => (
  <Wrapper>
    <TextAreaField
      placeholder="レビュー内容を入力してください"
      value={text('value', '')}
      handleChage={() => {}}
      isError={boolean('isError', false)}
      valueMaxLength={100}
    />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 500px;
  height: 400px;
`;
