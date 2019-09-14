import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Feature from '.';

storiesOf('molecules/Feature', module)
  .add('yummy', () => (
    <Wrapper>
      <Feature icon="yummy" text="ぜひ食べてほしいっ！" />
    </Wrapper>
  ))
  .add('treasure', () => (
    <Wrapper>
      <Feature icon="treasure" text="こんなおすすめ商品もあるよっ！" />
    </Wrapper>
  ));

const Wrapper = styled.div`
  display: inline-block;
  background-color: gray;
`;
