import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Size } from 'src/const';
import Tooltip from '.';

storiesOf('atoms/Tooltip', module).add('default', () => (
  <>
    <Wrapper>
      <Tooltip position="topRight" color="white">
        <Text>topRightのチップ</Text>
      </Tooltip>
    </Wrapper>
    <Wrapper>
      <Tooltip position="topLeft" color="white">
        <Text>topLeftのチップ</Text>
      </Tooltip>
    </Wrapper>
    <Wrapper>
      <Tooltip position="bottomRight" color="white">
        <Text>bottomRightのチップ</Text>
      </Tooltip>
    </Wrapper>
    <Wrapper>
      <Tooltip position="bottomLeft" color="white">
        <Text>bottomLeftのチップ</Text>
      </Tooltip>
    </Wrapper>
  </>
));

const Wrapper = styled.div`
  margin: 20px 10px;
`;
const Text = styled.p`
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  padding: 16px;
`;
