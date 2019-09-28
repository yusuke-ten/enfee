import React from 'react';
import styled from 'styled-components';
import { Button, PenIcon } from 'components/atoms';
import { Size } from 'src/const';

interface Props {
  text: string;
}

const TwitterButton: React.FC<Props> = ({ text, ...props }) => (
  <StyledButton color="secondary" {...props}>
    <PenIcon height={12} width={12} />
    <Text>{text}</Text>
  </StyledButton>
);

const Text = styled.span`
  padding-left: 6px;
  vertical-align: middle;
  font-size: ${Size.FONT_RATIO.SMALL}rem;
`;
const StyledButton = styled(Button)`
  height: 50px;
  width: 100%;
`;

export default TwitterButton;
