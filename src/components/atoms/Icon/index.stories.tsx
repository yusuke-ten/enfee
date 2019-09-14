import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('atoms/Icon', module)
  .add('yummy', () => (
    <Wrapper>
      <Icon icon="yummy" />
    </Wrapper>
  ))
  .add('treasure', () => (
    <Wrapper>
      <Icon icon="treasure" />
    </Wrapper>
  ));

const Wrapper = styled.div`
  background: gray;
  display: inline-block;
`;
