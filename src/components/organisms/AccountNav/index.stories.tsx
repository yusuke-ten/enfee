import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { Color, Mock } from 'src/const';
import AccountNav from '.';

storiesOf('organisms/AccountNav', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/reviews']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Container>
      <Wrapper>
        <AccountNav imageUrl={Mock.imageUrl} mypageUrl="/mypage" />
      </Wrapper>
    </Container>
  ));

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  display: inline-block;
  margin-left: 200px;
  height: 100%;
`;
