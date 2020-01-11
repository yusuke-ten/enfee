import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

const Label = styled.label<{
  isHidden?: boolean;
  isError?: boolean;
  focus?: boolean;
}>`
  visibility: ${props => (props.isHidden && !props.isError ? 'hidden' : 'visible')};
  font-size: ${Size.FONT.XSMALL}px;
  ${({ focus }) =>
    focus
      ? css`
          color: ${Color.THEME.PRIMARY};
        `
      : css`
          color: ${Color.FONT.BASE};
        `}
  color: ${props => props.isError && Color.THEME.ERROR};
`;

export default Label;
