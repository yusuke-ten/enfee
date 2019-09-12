import React from 'react';
import { storiesOf } from '@storybook/react';
import Feature from '.';

storiesOf('molecules/Feature', module)
  .add('yummy', () => <Feature icon="yummy" text="ぜひ食べてほしいっ！" />)
  .add('treasure', () => (
    <Feature icon="treasure" text="こんなおすすめ商品もあるよっ！" />
  ));
