import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

type Align = 'left' | 'right';

interface Props {
  text: string;
  align: Align;
}

const Bolloon: React.FC<Props> = ({ text, align, ...props }) => (
  <Container align={align} {...props}>
    <div>{text}</div>
  </Container>
);

const Container = styled.div<{ align: Align }>`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: ${Size.FONT_RATIO.BASE}rem;

  ${p =>
    p.align === 'right'
      ? css`
          background-color: ${Color.THEME.PRIMARY};
          border-top-right-radius: 0;
          color: ${Color.FONT.LESS};
        `
      : css`
          background-color: ${Color.BACKGROUND.BASE};
          border-top-left-radius: 0;
          color: ${Color.FONT.BASE};
        `}
`;

export default Bolloon;
