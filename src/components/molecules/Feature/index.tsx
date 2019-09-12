import React from 'react';
import styled from 'styled-components';
import Icon, { IconType } from '../../atoms/Icon';
import { Color, Size } from '../../../const';

interface Props {
  text: string;
  icon: IconType;
}

const Feature: React.FC<Props> = ({ text, icon }) => (
  <Wrapper>
    <Icon icon={icon} />
    <Text>{text}</Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${Color.FONT.LESS};
  font-size: ${Size.FONT.LARGE}px;

  > img {
    vertical-align: middle;
  }
`;
const Text = styled.div`
  padding-left: 12px;
  letter-spacing: 1px;
`;

export default Feature;
