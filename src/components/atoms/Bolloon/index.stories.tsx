import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Bolloon from '.';

storiesOf('atoms/Bolloon', module).add('left, right', () => (
  <>
    <Wrapper>
      <Bolloon text={text('text', 'これはleftメッセージです')} align="left" />
    </Wrapper>
    <Wrapper>
      <Bolloon text={text('text', 'これはrightメッセージです')} align="right" />
    </Wrapper>
  </>
));

const Wrapper = styled.div`
  padding: 10px 6px;
`;
