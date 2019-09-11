import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from '../../../const';

type ColorType = 'primary' | 'secondary' | 'twitter';
type SizeType = 'small' | 'midium' | 'large';
type ShapeType = 'oval' | 'rect';

interface Props {
  color?: ColorType;
  size?: SizeType;
  shape?: ShapeType;
  inversion?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  color = 'primary',
  size = 'midium',
  shape = 'rect',
  inversion = false,
}) => (
  <>
    <StyledButton color={color} size={size} shape={shape} inversion={inversion}>
      {children}
    </StyledButton>
  </>
);

const getColor = (color: ColorType = 'primary') => {
  switch (color) {
    case 'primary':
      return Color.THEME.PRIMARY;
    case 'secondary':
      return Color.THEME.ACCENT;
    case 'twitter':
      return Color.THEME.TWITTER;
    default:
      return Color.THEME.PRIMARY;
  }
};

const getShape = (shape: ShapeType = 'rect') => {
  switch (shape) {
    case 'rect':
      return Size.BORDER_RADIUS.RECT;
    case 'oval':
      return Size.BORDER_RADIUS.OVAL;
    default:
      return Size.BORDER_RADIUS.OVAL;
  }
};

const getColorStyle = (color: ColorType, inversion: boolean) => {
  const colorCode = getColor(color);

  if (inversion) {
    return css`
      color: ${colorCode};
      background-color: white;
      border: 2px solid ${colorCode};

      &:hover {
        color: ${Color.FONT.LESS};
        background-color: ${colorCode};
      }
    `;
  }

  return css`
    color: ${Color.FONT.LESS};
    background-color: ${colorCode};
    border: none;

    &:hover {
      opacity: 0.8;
    }
  `;
};

type ButtonProps = Required<Omit<Props, 'children'>>;

const StyledButton = styled.button<ButtonProps>`
  ${({ color, inversion }) => getColorStyle(color, inversion)}
  font-size: ${Size.FONT.BASE}px;
  padding: 6px 15px;
  border-radius: ${({ shape }) => getShape(shape)}px;
  letter-spacing: 1.28px;
  cursor: pointer;
  outline: none;
`;

export default Button;
