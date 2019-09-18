import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import UserInfo from '.';

const imageUrl =
  'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg';
const displayName = 'あおひろ';
const loginName = '@aohiro';

storiesOf('molecules/UserInfo', module)
  .add('default', () => (
    <Router>
      <UserInfo
        imageUrl={imageUrl}
        displayName={text('displayName', displayName)}
        loginName={text('loginName', loginName)}
        userPageUrl=""
      />
    </Router>
  ))
  .add('small', () => (
    <Router>
      <UserInfo
        imageUrl={imageUrl}
        displayName={text('displayName', displayName)}
        loginName={text('loginName', loginName)}
        userPageUrl=""
        size="small"
      />
    </Router>
  ));
