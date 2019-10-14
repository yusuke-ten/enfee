import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'src/const';

const backgroundPallete = {
  white: '#fff',
  primary: Color.THEME.PRIMARY,
};

type Color = 'white' | 'primary';
type Position = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface Props {
  children: React.ReactNode;
  position?: Position;
  color?: Color;
}

const Tooltip: React.FC<Props> = ({
  position = 'topRight',
  color = 'white',
  children,
  ...props
}) => {
  const colorCode = backgroundPallete[color];

  return (
    <Container position={position} colorCode={colorCode} {...props}>
      {children}
    </Container>
  );
};

const positionStyle = (position: Position) => {
  switch (position) {
    case 'topRight':
      return css`
        top: -5px;
        right: 10px;
      `;
    case 'topLeft':
      return css`
        top: -5px;
        left: 10px;
      `;
    case 'bottomRight':
      return css`
        bottom: -5px;
        right: 10px;
      `;
    case 'bottomLeft':
      return css`
        bottom: -5px;
        left: 10px;
      `;
    default:
      return null;
  }
};

const Container = styled.div<{ position: Position; colorCode: string }>`
  display: inline-block;
  position: relative;
  border-radius: 1px;
  box-shadow: 0 0 4px 0 rgba(163, 163, 163, 0.5);
  background-color: ${props => props.colorCode};
  border: 1px solid lightgray;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 13px;
    height: 13px;
    box-shadow: 0 0 6px 0 rgba(163, 163, 163, 0.5);
    transform: rotate(45deg) skew(5deg, 5deg);
    border: 1px solid lightgray;
    ${props => positionStyle(props.position)}
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1px;
  }

  &::before,
  &::after {
    background-color: ${props => props.colorCode};
  }

  > * {
    position: relative;
    z-index: 3;
  }
`;

export default Tooltip;
