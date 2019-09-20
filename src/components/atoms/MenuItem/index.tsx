import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

const MenuItem = styled.a<{ active?: boolean }>`
  display: inline-block;
  padding: 8px;
  padding-left: 16px;
  cursor: pointer;
  font-size: ${Size.FONT_RATIO.XSMALL}rem;
  width: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  transition: background-color 0.08s ease-in-out;
  ${props =>
    props.active
      ? css`
          background-color: ${Color.THEME.PRIMARY};
          color: ${Color.FONT.LESS};

          &:hover {
            background-color: ${Color.THEME.PRIMARY_DARK};
          }
        `
      : css`
          color: ${Color.FONT.BASE};
          font-weight: ${Size.FONT_WEIGHT.BOLD};

          &:hover {
            background-color: ${Color.BACKGROUND.BASE};
          }
        `}
`;

export default MenuItem;
