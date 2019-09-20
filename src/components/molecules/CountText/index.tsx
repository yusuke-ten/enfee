import React from 'react';
import styled from 'styled-components';
import { CommentDotsIcon } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  text: string;
  count: number;
}

const CountText: React.FC<Props> = ({ text, count }) => (
  <Wrapper>
    <CommentDotsIcon color="gray" height={15} width={15} />
    <Text>
      {text}（{count}）
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  color: ${Color.FONT.BASE};
`;
const Text = styled.span`
  font-size: ${Size.FONT_RATIO.BASE}rem;
  padding-left: 8px;
`;

export default CountText;
