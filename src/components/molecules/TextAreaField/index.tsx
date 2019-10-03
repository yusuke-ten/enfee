import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TextArea, InfoTxt, WarnTxt } from 'components/atoms';

interface Props {
  value: string;
  handleChage: () => void;
  placeholder: string;
  isError?: boolean;
  valueMaxLength: number;
}

const TextAreaField: React.FC<Props> = ({
  value,
  handleChage,
  placeholder,
  isError = false,
  valueMaxLength,
}) => {
  const RemainingLength = useMemo(() => {
    return valueMaxLength - value.length;
  }, [value]);

  const validLength = value.length < valueMaxLength;

  return (
    <Container>
      <TextArea
        value={value}
        handleChage={handleChage}
        placeholder={placeholder}
        isError={isError}
        height="94%"
      />
      {validLength ? (
        <StyledInfoTxt size="s">残り文字数： {RemainingLength} </StyledInfoTxt>
      ) : (
        <StyledWarnTxt size="s">
          残り文字数： {RemainingLength} ※{valueMaxLength}
          文字以内で入力してください{' '}
        </StyledWarnTxt>
      )}
    </Container>
  );
};

const commonTxtStyle = css`
  margin-top: 0.4rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledInfoTxt = styled(InfoTxt)`
  ${commonTxtStyle}
`;
const StyledWarnTxt = styled(WarnTxt)`
  ${commonTxtStyle}
`;

export default TextAreaField;
