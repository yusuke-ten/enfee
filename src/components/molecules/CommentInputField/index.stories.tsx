import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Mock } from 'src/const';
import CommentInputField from '.';

const { imageUrl } = Mock;
const onChangeHandler = () => {};

storiesOf('molecules/CommentInputField', module)
  .add('default', () => (
    <Wrapper>
      <CommentInputField
        imageUrl={imageUrl}
        value={text('value', '')}
        onChange={onChangeHandler}
      />
    </Wrapper>
  ))
  .add('reply', () => (
    <Wrapper>
      <CommentInputField
        imageUrl={imageUrl}
        value={text('value', '')}
        onChange={onChangeHandler}
        reply
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 500px;
`;
