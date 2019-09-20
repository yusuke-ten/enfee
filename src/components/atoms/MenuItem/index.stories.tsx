import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Color } from 'src/const';
import MenuItem from '.';

storiesOf('atoms/MenuItem', module)
  .add('default', () => (
    <Wrapper>
      <MenuItem>セブン−イレブン</MenuItem>
    </Wrapper>
  ))
  .add('active', () => (
    <Wrapper>
      <MenuItem active>セブン−イレブン</MenuItem>
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
