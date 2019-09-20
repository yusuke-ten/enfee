import React from 'react';
import styled from 'styled-components';
import { Color, Size } from 'src/const';

interface Props {
  heading: string;
  amount: number;
}

const StatsCell: React.FC<Props> = ({ heading, amount }) => (
  <>
    <Title>{heading}</Title>
    <Amount>{amount}</Amount>
  </>
);

const Title = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
  padding-bottom: 4px;
  color: ${Color.FONT.BASE};
  font-size: ${Size.FONT_RATIO.SMALL}rem;
`;
const Amount = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
  color: ${Color.FONT.DARK};
  font-size: ${Size.FONT_RATIO.SMALL}rem;
`;

export default StatsCell;
