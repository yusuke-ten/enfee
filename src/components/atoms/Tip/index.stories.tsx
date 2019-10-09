import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Tip from '.';

storiesOf('atoms/Tip', module)
  .add('top', () => (
    <Wrapper>
      <Tip>これはチップ</Tip>
    </Wrapper>
  ))
  .add('left', () => (
    <Wrapper>
      <Tip position="left">これはチップ</Tip>
    </Wrapper>
  ))
  .add('right', () => (
    <Wrapper>
      <Tip position="right">これはチップ</Tip>
    </Wrapper>
  ))
  .add('bottom', () => (
    <Wrapper>
      <Tip position="bottom">これはチップ</Tip>
    </Wrapper>
  ));

const Wrapper = styled.div`
  padding: 8px;
`;
