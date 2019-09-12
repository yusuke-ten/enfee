import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';

storiesOf('atoms/Heading', module)
  .add('h1', () => (
    <Heading type="h1">
      コンビニ商品の感想を
      <br />
      共有しよう
    </Heading>
  ))
  .add('h2', () => <Heading type="h2">ログイン</Heading>)
  .add('h3', () => <Heading type="h3">レビューを投稿する</Heading>);
