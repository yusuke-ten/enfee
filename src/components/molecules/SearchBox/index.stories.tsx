import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Color } from 'src/const';
import SearchBox from '.';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  action('handleSubmit');
};

storiesOf('molecules/SearchBox', module).add('default', () => (
  <Background>
    <Wrapper>
      <SearchBox handleSubmit={handleSubmit} />
    </Wrapper>
  </Background>
));

const Background = styled.div`
  background-color: ${Color.THEME.PRIMARY};
  height: 100px;
`;
const Wrapper = styled.div`
  width: 300px;
`;
