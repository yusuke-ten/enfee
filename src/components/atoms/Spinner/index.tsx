import React from 'react';
import styled from 'styled-components';
import { Color } from 'src/const';
import Oval from './svg/oval.svg';

type Color = 'white' | 'gray' | 'primary';

interface Props {
  color?: Color;
  width?: number;
  height?: number;
}

const Spinner: React.FC<Props> = ({
  color = 'white',
  width = 40,
  height = 40,
  ...props
}) => <StyledOval width={width} height={height} color={color} {...props} />;

const getcolor = (color: Color) => {
  switch (color) {
    case 'primary':
      return Color.THEME.PRIMARY;
    case 'white':
      return Color.FONT.LESS;
    case 'gray':
      return Color.FONT.BASE;
    default:
      return Color.FONT.LESS;
  }
};

const StyledOval = styled(Oval)<{ color: Color }>`
  stroke: ${props => getcolor(props.color)};
`;

export default Spinner;
