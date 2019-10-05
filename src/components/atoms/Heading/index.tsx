import React from 'react';
import styled, { css } from 'styled-components';
import { Size, Color } from '../../../const';

type Type = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Color = 'base' | 'dark' | 'light' | 'less' | 'primary';
type Align = 'left' | 'center' | 'right';

interface Props {
  type: Type;
  children: React.ReactNode;
  align?: Align;
  color?: Color;
}

// TODO: 冗長なのでリファクタリングしたい
const Heading: React.FC<Props> = ({
  type,
  children,
  color = 'base',
  align = 'left',
  ...props
}) => {
  switch (type) {
    case 'h1':
      return (
        <StyledH1 {...{ color, align }} {...props}>
          {children}
        </StyledH1>
      );
    case 'h2':
      return (
        <StyledH2 {...{ color, align }} {...props}>
          {children}
        </StyledH2>
      );
    case 'h3':
      return (
        <StyledH3 {...{ color, align }} {...props}>
          {children}
        </StyledH3>
      );
    case 'h4':
      return (
        <StyledH4 {...{ color, align }} {...props}>
          {children}
        </StyledH4>
      );
    case 'h5':
      return (
        <StyledH5 {...{ color, align }} {...props}>
          {children}
        </StyledH5>
      );
    case 'h6':
      return (
        <StyledH6 {...{ color, align }} {...props}>
          {children}
        </StyledH6>
      );
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

const commonStyle = ({ color, align }: StyleProps) => css`
  font-weight: ${Size.FONT_WEIGHT.BOLD};
  letter-spacing: 2px;
  color: ${getcolor(color)};
  text-align: ${align};
`;

// TODO: 冗長なのでリファクタリングする
const StyledH1 = styled.h1<StyleProps>`
  font-size: ${Size.FONT.XLARGE}px;
  ${props => commonStyle(props)}
`;
const StyledH2 = styled.h2<StyleProps>`
  font-size: ${Size.FONT.LARGE}px;
  ${props => commonStyle(props)}
`;
const StyledH3 = styled.h3<StyleProps>`
  font-size: ${Size.FONT.MEDIUM}px;
  ${props => commonStyle(props)}
`;
const StyledH4 = styled.h4<StyleProps>`
  font-size: ${Size.FONT.SMALL}px;
  ${props => commonStyle(props)}
`;
const StyledH5 = styled.h5<StyleProps>`
  font-size: ${Size.FONT.XSMALL}px;
  ${props => commonStyle(props)}
`;
const StyledH6 = styled.h6<StyleProps>`
  font-size: ${Size.FONT.XXSMALL}px;
  ${props => commonStyle(props)}
`;

export default Heading;
