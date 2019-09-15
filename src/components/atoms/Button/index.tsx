import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from '../../../const';

type ColorType = 'primary' | 'secondary' | 'twitter';
type SizeType = 'small' | 'midium' | 'large';
type ShapeType = 'oval' | 'rect';

interface Props {
  onClick?: () => void;
  color?: ColorType;
  size?: SizeType;
  shape?: ShapeType;
  reverse?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  onClick = () => {},
  color = 'primary',
  size = 'midium',
  shape = 'rect',
  reverse = false,
  disabled = false,
}) => (
  <StyledButton
    onClick={onClick}
    {...{ color, size, shape, reverse }}
    disabled={disabled}
  >
    {children}
  </StyledButton>
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

const getshape = (shape: ShapeType = 'rect') => {
  switch (shape) {
    case 'rect':
      return Size.BORDER_RADIUS.RECT;
    case 'oval':
      return Size.BORDER_RADIUS.OVAL;
    default:
      return Size.BORDER_RADIUS.RECT;
  }
};

const getColorStyle = (color: ColorType, reverse: boolean) => {
  const colorCode = getColor(color);

  if (reverse) {
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
  ${({ color, reverse }) => getColorStyle(color, reverse)}
  font-size: ${Size.FONT.BASE}px;
  height: 35px;
  padding: 0 26px;
  border-radius: ${({ shape }) => getshape(shape)}px;
  letter-spacing: 1.28px;
  cursor: pointer;
  outline: none;
  font-weight: ${Size.FONT_WEIGHT.NORMAL};
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: gray;
      cursor: default;
      opacity: 1 !important;
    `}
`;

export default Button;
