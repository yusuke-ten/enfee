import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

export type ColorType = 'primary' | 'secondary' | 'twitter';
type SizeType = 'small' | 'midium' | 'large';
type ShapeType = 'oval' | 'rect';

interface Props {
  color?: ColorType;
  size?: SizeType;
  shape?: ShapeType;
  reverse?: boolean;
  disabled?: boolean;
  height?: number;
}

export const getColor = (color: ColorType = 'primary') => {
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

const StyledButton = styled.button<Props>`
  ${({ color = 'primary', reverse = false }) => getColorStyle(color, reverse)}
  font-size: ${Size.FONT.XSMALL}px;
  height: ${({ height = 35 }) => height}px;
  border-radius: ${({ shape }) => getshape(shape)}px;
  letter-spacing: 1.28px;
  padding: 0 25px;
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

export default StyledButton;
