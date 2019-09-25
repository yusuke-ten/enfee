import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import HoverTipInteraction, { Tip, Marker } from '.';

storiesOf('atoms/HoverTipInteraction', module)
  .add('default(position: top)', () => (
    <Wrapper>
      <HoverTipInteraction>
        <span>ホバーしてね</span>
        <Tip>
          <span>チップだよ</span>
        </Tip>
      </HoverTipInteraction>
    </Wrapper>
  ))
  .add('marker(position: top)', () => (
    <Wrapper>
      <HoverTipInteraction>
        <Tip>
          <span>チップだよ</span>
        </Tip>
        <Marker>
          <span>ホバーしてね</span>
        </Marker>
      </HoverTipInteraction>
    </Wrapper>
  ))
  .add('marker(position: bottom)', () => (
    <Wrapper>
      <HoverTipInteraction tipPosition="bottom">
        <Tip>
          <span>チップだよ</span>
        </Tip>
        <Marker>
          <span>ホバーしてね</span>
        </Marker>
      </HoverTipInteraction>
    </Wrapper>
  ));

const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
`;
