import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { Color } from 'src/const';
import MenuItem from '.';

storiesOf('atoms/MenuItem', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/seven-eleven']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Wrapper>
      <MenuItem to="#">セブン−イレブン</MenuItem>
    </Wrapper>
  ))
  .add('active', () => (
    <Wrapper>
      <MenuItem to="/seven-eleven">セブン−イレブン</MenuItem>
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
