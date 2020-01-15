import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Modal from '.';

storiesOf('molecules/Modal', module).add('default', () => (
  <Modal onClose={() => {}} heading="タイトル" open>
    <Container>Top OK</Container>
    <div>Bottom OK</div>
  </Modal>
));

const Container = styled.div`
  height: 600px;
`;
