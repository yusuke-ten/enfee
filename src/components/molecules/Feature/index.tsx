import React from 'react';
import styled from 'styled-components';
import InfoIcon, { InfoIconType } from 'components/atoms/Icon/InfoIcon';
import { Color, Size } from 'src/const';

interface Props {
  text: string;
  icon: InfoIconType;
}

const Feature: React.FC<Props> = ({ text, icon }) => (
  <Wrapper>
    <InfoIcon icon={icon} />
    <Text>{text}</Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${Color.FONT.LESS};
  font-size: ${Size.FONT.MEDIUM}px;

  > img {
    vertical-align: middle;
  }
`;
const Text = styled.div`
  padding-left: 12px;
  letter-spacing: 1px;
`;

export default Feature;
