import React from 'react';
import styled, { css } from 'styled-components';
import { Size, Color } from '../../../const';

type Type = 'h1' | 'h2' | 'h3';

interface Props {
  type: Type;
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ type, children }) => {
  switch (type) {
    case 'h1':
      return <StyledH1>{children}</StyledH1>;
    case 'h2':
      return <StyledH2>{children}</StyledH2>;
    case 'h3':
      return <StyledH3>{children}</StyledH3>;
    default:
      return null;
  }
};

const commonStyle = css`
  color: ${Color.FONT.BASE};
  font-weight: ${Size.FONT_WEIGHT.BOLD};
  letter-spacing: 2px;
`;

const StyledH1 = styled.h1`
  font-size: ${Size.FONT.XXLARGE}px;
  ${commonStyle}
`;
const StyledH2 = styled.h2`
  font-size: ${Size.FONT.XLARGE}px;
  ${commonStyle}
`;
const StyledH3 = styled.h3`
  font-size: ${Size.FONT.LARGE}px;
  ${commonStyle}
`;

export default Heading;
