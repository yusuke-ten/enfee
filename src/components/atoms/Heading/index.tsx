import React from 'react';
import styled, { css } from 'styled-components';
import { Size, Color } from '../../../const';

type Type = 'h1' | 'h2' | 'h3';
type Color = 'base' | 'dark' | 'light' | 'less' | 'primary';
type Align = 'left' | 'center' | 'right';

interface Props {
  type: Type;
  children: React.ReactNode;
  align?: Align;
  color?: Color;
}

const Heading: React.FC<Props> = ({
  type,
  children,
  color = 'base',
  align = 'left',
}) => {
  switch (type) {
    case 'h1':
      return <StyledH1 {...{ color, align }}>{children}</StyledH1>;
    case 'h2':
      return <StyledH2 {...{ color, align }}>{children}</StyledH2>;
    case 'h3':
      return <StyledH3 {...{ color, align }}>{children}</StyledH3>;
    default:
      return null;
  }
};

const pallete = {
  base: Color.FONT.BASE,
  dark: Color.FONT.DARK,
  less: Color.FONT.LESS,
  light: Color.FONT.LIGHT,
  primary: Color.THEME.PRIMARY,
};

const getcolor = (color: Color) => pallete[color];

interface StyleProps {
  color: Color;
  align: Align;
}

const commonStyle = css`
  font-weight: ${Size.FONT_WEIGHT.BOLD};
  letter-spacing: 2px;
`;
const StyledH1 = styled.h1<StyleProps>`
  color: ${({ color }) => getcolor(color)};
  text-align: ${props => props.align};
  font-size: ${Size.FONT.XLARGE}px;
  ${commonStyle}
`;
const StyledH2 = styled.h2<StyleProps>`
  color: ${({ color }) => getcolor(color)};
  text-align: ${props => props.align};
  font-size: ${Size.FONT.LARGE}px;
  ${commonStyle}
`;
const StyledH3 = styled.h3<StyleProps>`
  color: ${({ color }) => getcolor(color)};
  text-align: ${props => props.align};
  font-size: ${Size.FONT.MEDIUM}px;
  ${commonStyle}
`;

export default Heading;
