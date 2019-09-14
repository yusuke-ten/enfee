import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/Input';
import Label from 'components/atoms/Label';

interface Props {
  value: string;
  onChangeHander: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isError?: boolean;
}

const Field: React.FC<Props> = ({
  value,
  onChangeHander,
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
        メールアドレス
      </Label>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeHandler={onChangeHander}
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
