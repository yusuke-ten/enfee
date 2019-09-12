import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('primary', () => <Button color="primary">ログインする</Button>)
  .add('secondary', () => <Button color="secondary">新規登録</Button>)
  .add('twitter', () => <Button color="twitter">Twitterでログインする</Button>)
  .add('oval', () => (
    <Button shape="oval" reverse>
      フォロー
    </Button>
  ));
