import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/Input';
import { InputType } from 'components/atoms/Input/TextInput';
import Label from 'components/atoms/Label';

interface Props {
  type?: InputType;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isError?: boolean;
}

const Field: React.FC<Props> = ({
  type,
  value,
  onChangeHandler,
  placeholder,
  isError = false,
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export default Field;
