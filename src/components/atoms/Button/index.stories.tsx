import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import LauncherButton from './LauncherButton';

storiesOf('atoms/Button', module)
  .add('primary', () => <Button color="primary">ログインする</Button>)
  .add('secondary', () => <Button color="secondary">新規登録</Button>)
  .add('twitter', () => <Button color="twitter">Twitterでログインする</Button>)
  .add('oval', () => (
    <Button shape="oval" reverse>
      フォロー
    </Button>
  ))
  .add('LauncherButton', () => <LauncherButton shadow>◆</LauncherButton>);
