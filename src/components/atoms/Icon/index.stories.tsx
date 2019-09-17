import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { InfoIcon, EnvelopeIcon, CommentsIcon } from '.';

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
  ))
  .add('EnvelopeIcon', () => (
    <Wrapper>
      <EnvelopeIcon />
    </Wrapper>
  ))
  .add('CommentsIcon', () => (
    <Wrapper>
      <CommentsIcon />
    </Wrapper>
  ));

const Wrapper = styled.div`
  background: gray;
  display: inline-block;
`;
