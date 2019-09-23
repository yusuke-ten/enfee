import React from 'react';
import styled from 'styled-components';
import { ThumbsUpIcon } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  count: number;
  isLiked: boolean;
}

const Like: React.FC<Props> = ({ count, isLiked }) => {
  const iconColor = isLiked ? 'primary' : 'gray';

  return (
    <Container>
      <ThumbsUpIcon color={iconColor} width={16} height={16} />
      <Text isLiked={isLiked}>{count}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Text = styled.span<{ isLiked: boolean }>`
  padding-left: 5px;
  font-size: ${Size.FONT.MEDIUM}px;
  color: ${props => (props.isLiked ? Color.THEME.PRIMARY : Color.FONT.BASE)};
  vertical-align: middle;
`;

export default Like;
