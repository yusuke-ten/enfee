import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Line from '.';

storiesOf('atoms/Line', module)
  .add('default', () => (
    <Wrapper>
      <Line />
    </Wrapper>
  ))
  .add('with text', () => (
    <Wrapper>
      <Line text="または" />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 500px;
`;
