import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Color } from 'src/const';
import EntranceInfo from '.';

storiesOf('organisms/EntranceInfo', module).add('default', () => (
  <Container>
    <EntranceInfo />
  </Container>
));

const Container = styled.div`
  display: inline-block;
  background: ${Color.THEME.PRIMARY};
`;
