import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import UserNames from '.';

storiesOf('atoms/Usernames', module)
  .add('align left', () => (
    <Wrapper>
      <UserNames
        displayName={text('displayName', 'あおひろ')}
        loginName={text('loginName', '@aohiro')}
        isSmall={boolean('isSmall', true)}
      />
    </Wrapper>
  ))
  .add('align center', () => (
    <Wrapper>
      <UserNames
        displayName={text('displayName', 'あおひろ')}
        loginName={text('loginName', '@aohiro')}
        align="center"
        isSmall={boolean('isSmall', false)}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 200px;
`;
