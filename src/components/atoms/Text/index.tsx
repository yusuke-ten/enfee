import React from 'react';
import styled from 'styled-components';
import { Color, Size } from 'src/const';

type Role = 'default' | 'info' | 'warn';
type Size = 'xs' | 's' | 'b' | 'm' | 'l' | 'xl';

interface Props {
  tag?: React.ReactType | keyof JSX.IntrinsicElements;
  size?: Size;
}

const txtFactory: (role: Role) => React.FC<Props> = role => ({
  tag = 'p',
  size = 'm',
  ...props
}) => {
  return <StyledText as={tag} role={role} size={size} {...props} />;
};

const sizeMap: { [k in Size]: number } = {
  xs: Size.FONT_RATIO.XSMALL,
  s: Size.FONT_RATIO.SMALL,
  b: Size.FONT_RATIO.BASE,
  m: Size.FONT_RATIO.MEDIUM,
  l: Size.FONT_RATIO.LARGE,
  xl: Size.FONT_RATIO.XLARGE,
};

const colorPallete: { [k in Role]: string } = {
  default: Color.FONT.DARK,
  info: Color.FONT.BASE,
  warn: Color.THEME.ERROR,
};

const StyledText = styled.p<{ role: Role; size: Size }>`
  font-size: ${props => sizeMap[props.size]}rem;
  color: ${props => colorPallete[props.role]};
`;

const Txt = txtFactory('default');
export default Txt;

export const InfoTxt = txtFactory('info');
export const WarnTxt = txtFactory('warn');
