import React, { useState } from 'react';
import styled from 'styled-components';
import { InputType } from 'components/atoms/Input/TextInput';
import { TextInput, Label, WarnTxt } from 'components/atoms';

interface Props {
  type?: InputType;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isError?: boolean;
  validationError?: string;
}

const Field: React.FC<Props> = ({
  type,
  value,
  onChangeHandler,
  placeholder,
  isError = false,
  validationError = '',
}) => {
  const [showLabel, toggleShowLabel] = useState<boolean>(false);

  const onBlurHandler = () => {
    toggleShowLabel(false);
  };

  const onFocusHandler = () => {
    toggleShowLabel(true);
  };

  return (
    <Wrapper>
      <Label isHidden={!showLabel} isError={isError}>
        {placeholder}
      </Label>
      <TextInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChangeHandler={onChangeHandler}
        onBlurHandler={onBlurHandler}
        onFocusHandler={onFocusHandler}
        isError={isError}
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
