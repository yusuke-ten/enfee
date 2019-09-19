import React from 'react';
import styled from 'styled-components';
import { Button, TwitterIcon } from 'components/atoms';

interface Props {
  text: string;
}

const TwitterButton: React.FC<Props> = ({ text }) => (
  <Button color="twitter">
    <Text>{text}</Text>
    <TwitterIcon height={12} width={12} />
  </Button>
);

const Text = styled.span`
  padding-right: 4px;
  vertical-align: middle;
`;

export default TwitterButton;
