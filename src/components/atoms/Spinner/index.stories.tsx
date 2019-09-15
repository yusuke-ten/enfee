import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Spinner from '.';

storiesOf('atoms/Spinner', module)
  .add('white', () => (
    <Wrapper>
      <Spinner color="white" />
    </Wrapper>
  ))
  .add('primary', () => (
    <Wrapper>
      <Spinner color="primary" />
    </Wrapper>
  ))
  .add('gray', () => (
    <Wrapper>
      <Spinner color="gray" />
    </Wrapper>
  ));

const Wrapper = styled.div`
  display: inline-block;
  background: black;
`;
