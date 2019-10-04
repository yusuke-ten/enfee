import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Mock } from 'src/const';
import InputPictureField from '.';

const pictures = [Mock.imageUrl, Mock.imageUrl];

storiesOf('molecules/InputPictureField', module).add('default', () => (
  <Wrapper>
    <InputPictureField pictures={pictures} />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 600px;
  /* height: 240px; */
`;
