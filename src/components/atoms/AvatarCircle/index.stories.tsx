import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import AvatarCircle from '.';

const imageUrl =
  'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg';

storiesOf('atoms/AvatarCircle', module).add('default', () => (
  <Wrapper>
    <AvatarCircle src={imageUrl} />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 70px;
  height: 70px;
`;
