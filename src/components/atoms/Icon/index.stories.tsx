import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { InfoIcon } from '.';

storiesOf('atoms/Icon', module)
  .add('InfoIcon/yummy', () => (
    <Wrapper>
      <InfoIcon icon="yummy" />
    </Wrapper>
  ))
  .add('InfoIcon/treasure', () => (
    <Wrapper>
      <InfoIcon icon="treasure" />
    </Wrapper>
  ));

const Wrapper = styled.div`
  background: gray;
  display: inline-block;
`;
