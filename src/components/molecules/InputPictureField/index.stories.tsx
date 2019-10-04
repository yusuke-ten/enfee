import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Mock } from 'src/const';
import InputPictureField from '.';

const pictures = [Mock.imageUrl, Mock.imageUrl];

storiesOf('molecules/InputPictureField', module).add('default', () => (
  <Wrapper>
    <InputPictureField
      pictures={pictures}
      handleChangeFile={action('handleChageFile')}
      maxPicturesCount={6}
    />
  </Wrapper>
));

const Wrapper = styled.div`
  position: relative;
  top: 40px;
  left: 40px;
  width: 530px;
`;
