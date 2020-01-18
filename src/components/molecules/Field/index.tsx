import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { InputType } from 'components/atoms/Input/TextInput';
import { TextInput, Label, WarnTxt } from 'components/atoms';

interface Props {
  type?: InputType;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isError?: boolean;
  validationError?: string;
  label?: string;
  name?: string;
}

const Field: React.FC<Props> = ({
  type,
  value,
  onChangeHandler,
  placeholder,
  isError = false,
  validationError = '',
  label,
  name,
}) => {
  const [focus, toggleFocus] = useState<boolean>(false);

  const onBlurHandler = useCallback(() => {
    toggleFocus(false);
  }, []);

  const onFocusHandler = useCallback(() => {
    toggleFocus(true);
  }, []);

  return (
    <Wrapper>
      {label ? (
        <Label focus={focus} isError={isError}>
          {label}
        </Label>
      ) : (
        <Label isHidden={!focus} isError={isError} focus={focus}>
          {placeholder}
        </Label>
      )}
      <TextInput
        type={type}
        value={value}
        placeholder={placeholder || ''}
        onChangeHandler={onChangeHandler}
        onBlurHandler={onBlurHandler}
        onFocusHandler={onFocusHandler}
        isError={isError}
        name={name}
      />
      {validationError && (
        <StyledWarnTxt size="s">
          {placeholder}は{validationError}
        </StyledWarnTxt>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
`;
const StyledWarnTxt = styled(WarnTxt)`
  margin-top: 6px;
`;

export default Field;
