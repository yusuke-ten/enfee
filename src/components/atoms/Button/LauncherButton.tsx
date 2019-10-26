import styled, { css } from 'styled-components';
import { ColorType, getColor } from '.';

interface Props {
  color?: ColorType;
  shadow?: boolean;
  small?: boolean;
}

const LauncherButton = styled.button<Props>`
  color: #ffffff;
  background-color: ${({ color = 'secondary' }) => getColor(color)};
  border-radius: 50%;
  ${({ small = false }) =>
    small
      ? css`
          width: 45px;
          height: 45px;
        `
      : css`
          width: 60px;
          height: 60px;
        `}
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ shadow = false }) =>
    shadow &&
    css`
      filter: drop-shadow(0 3 4 rgba(0, 0, 0, 0.2));
    `}
`;

export default LauncherButton;
