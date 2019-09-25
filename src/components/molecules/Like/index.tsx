import React from 'react';
import styled from 'styled-components';
import { ThumbsUpIcon } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  count: number;
  isLiked: boolean;
  handleClick: () => void;
}

const Like: React.FC<Props> = ({ count, isLiked, handleClick, ...props }) => {
  const iconColor = isLiked ? 'primary' : 'gray';

  return (
    <Container onClick={handleClick} {...props}>
      <ThumbsUpIcon color={iconColor} width={16} height={16} />
      <Text isLiked={isLiked}>{count}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;
const Text = styled.span<{ isLiked: boolean }>`
  padding-left: 5px;
  font-size: ${Size.FONT.MEDIUM}px;
  color: ${props => (props.isLiked ? Color.THEME.PRIMARY : Color.FONT.BASE)};
  vertical-align: middle;
`;

export default Like;
