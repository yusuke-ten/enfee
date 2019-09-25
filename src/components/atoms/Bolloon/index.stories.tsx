import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Balloon from '.';

storiesOf('atoms/Balloon', module)
  .add('top', () => (
    <Wrapper>
      <Balloon>これはバルーン</Balloon>
    </Wrapper>
  ))
  .add('left', () => (
    <Wrapper>
      <Balloon position="left">これはバルーン</Balloon>
    </Wrapper>
  ))
  .add('right', () => (
    <Wrapper>
      <Balloon position="right">これはバルーン</Balloon>
    </Wrapper>
  ))
  .add('bottom', () => (
    <Wrapper>
      <Balloon position="bottom">これはバルーン</Balloon>
    </Wrapper>
  ));

const Wrapper = styled.div`
  padding: 8px;
`;
