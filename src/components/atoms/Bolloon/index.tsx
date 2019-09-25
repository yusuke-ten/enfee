import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

type Color = 'primary';
type Position = 'top' | 'left' | 'bottom' | 'right';

interface Props {
  children: React.ReactNode;
  position?: Position;
  color?: Color;
}

const BalloonComponent: React.FC<Props> = ({
  position = 'top',
  color = 'primary',
  children,
  ...props
}) => {
  const colorCode = color === 'primary' ? Color.THEME.PRIMARY : 'white';

  return (
    <Balloon color={colorCode} position={position} {...props}>
      {children}
    </Balloon>
  );
};

const getAllowStyle = (p: Position, colorCode: string) => {
  switch (p) {
    case 'top':
      return css`
        border-color: ${colorCode} transparent transparent transparent;
        border-width: 3px 3px 0 3px;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
      `;
    case 'left':
      return css`
        border-color: transparent transparent transparent ${colorCode};
        border-width: 3px 0 3px 3px;
        right: 0;
        top: 50%;
        transform: translate(100%, -50%);
      `;
    case 'right':
      return css`
        border-color: transparent ${colorCode} transparent transparent;
        border-width: 3px 3px 3px 0;
        left: 0;
        top: 50%;
        transform: translate(-100%, -50%);
      `;
    case 'bottom':
      return css`
        border-color: transparent transparent ${colorCode} transparent;
        border-width: 0 3px 3px 3px;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
      `;
    default:
      return null;
  }
};

const Balloon = styled.span<{ color: string; position: Position }>`
  background-color: ${props => props.color};
  border-radius: 2px;
  color: white;
  display: inline-block;
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  padding: 0.6rem 0.7rem;
  position: relative;

  &::after {
    border-style: solid;
    content: '';
    display: block;
    position: absolute;

    ${props => getAllowStyle(props.position, props.color)}
  }
`;

export default BalloonComponent;
