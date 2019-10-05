import React from 'react';
import styled from 'styled-components';
import { Txt, Spinner, Button } from 'components/atoms';

interface Props {
  text: string;
  lodaingText: string;
  isLoading: boolean;
  disabled: boolean;
}

const PostButtonWithLoading: React.FC<Props> = ({
  text,
  lodaingText,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <Button type="submit" disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <span>
          <StyledTxt tag="span" size="s">
            {lodaingText}
          </StyledTxt>
          <Spinner height={14} width={14} />
        </span>
      ) : (
        text
      )}
    </Button>
  );
};

const StyledTxt = styled(Txt)`
  color: white;
  margin-right: 6px;
  vertical-align: middle;
`;

export default PostButtonWithLoading;
