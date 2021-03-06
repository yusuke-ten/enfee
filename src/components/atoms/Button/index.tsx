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
  // height?: number;
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
        opacity: 0.8;
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

const getSizeStyle = (size: SizeType = 'midium') => {
  if (size === 'small') {
    return css`
      height: 28px;
      padding: 0 14px;
      font-size: ${Size.FONT.XXSMALL}px;
    `;
  }
  if (size === 'large') {
    return css`
      height: 40px;
      padding: 0 22px;
      font-size: ${Size.FONT.SMALL}px;
    `;
  }

  // default(midium)のとき
  return css`
    height: 35px;
    padding: 0 18px;
    font-size: ${Size.FONT.XSMALL}px;
  `;
};

const StyledButton = styled.button<Props>`
  ${({ color = 'primary', reverse = false }) => getColorStyle(color, reverse)}
  border-radius: ${({ shape }) => getshape(shape)}px;
  letter-spacing: 1.28px;
  ${props => getSizeStyle(props.size || 'midium')}
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
