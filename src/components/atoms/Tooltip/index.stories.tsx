import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Tooltip from '.';

storiesOf('atoms/Tooltip', module)
  .add('top', () => (
    <Wrapper>
      <Tooltip>これはチップ</Tooltip>
    </Wrapper>
  ))
  .add('left', () => (
    <Wrapper>
      <Tooltip position="left">これはチップ</Tooltip>
    </Wrapper>
  ))
  .add('right', () => (
    <Wrapper>
      <Tooltip position="right">これはチップ</Tooltip>
    </Wrapper>
  ))
  .add('bottom', () => (
    <Wrapper>
      <Tooltip position="bottom">これはチップ</Tooltip>
    </Wrapper>
  ));

const Wrapper = styled.div`
  padding: 8px;
`;
