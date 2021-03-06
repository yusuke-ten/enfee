import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Logo from '.';

storiesOf('atoms/Logo', module).add('default', () => (
  <Wrapper>
    <Logo />
  </Wrapper>
));

const Wrapper = styled.div`
  display: inline-block;
  background: black;
`;
