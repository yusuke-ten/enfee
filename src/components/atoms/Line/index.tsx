import React from 'react';
import styled from 'styled-components';
import { Color, Size } from 'src/const';

interface Props {
  text?: string;
}

const Line: React.FC<Props> = ({ text }) => {
  if (text) {
    return (
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    );
  }

  return <Wrapper />;
};

const Wrapper = styled.h3`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${Color.BORDER.LIGHT};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
const Text = styled.span`
  z-index: 1;
  position: relative;
  display: inline-block;
  padding: 0 16px;
  color: ${Color.FONT.SUPER_LIGHT};
  font-size: ${Size.FONT.BASE}px;
  line-height: 16px;
  text-align: center;
  background-color: #fff;
`;

export default Line;
