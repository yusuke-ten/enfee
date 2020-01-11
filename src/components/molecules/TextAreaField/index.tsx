import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { TextArea, InfoTxt, WarnTxt, Label } from 'components/atoms';

interface Props {
  value: string;
  handleChage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isError?: boolean;
  valueMaxLength: number;
  label?: string;
}

const TextAreaField: React.FC<Props> = ({
  value,
  handleChage,
  placeholder,
  isError = false,
  valueMaxLength,
  label,
}) => {
  const [focus, toggleFocus] = useState<boolean>(false);

  const onBlurHandler = () => {
    toggleFocus(false);
  };

  const onFocusHandler = () => {
    toggleFocus(true);
  };

  const RemainingLength = useMemo(() => {
    return valueMaxLength - value.length;
  }, [value]);

  const validLength = value.length < valueMaxLength;

  return (
    <Container>
      {label && (
        <Label focus={focus} isError={isError}>
          {label}
        </Label>
      )}
      <TextArea
        value={value}
        handleChage={handleChage}
        placeholder={placeholder}
        isError={isError}
        height="94%"
        onBlurHandler={onBlurHandler}
        onFocusHandler={onFocusHandler}
      />
      {validLength ? (
        <StyledInfoTxt size="s">
          残り文字数： {RemainingLength} ({valueMaxLength}文字以内で入力)
        </StyledInfoTxt>
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
