import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Size, Color } from 'src/const';

interface Props {
  value: string;
  placeholder: string;
  onChangeHandler: () => void;
}

const TextInput: FC<Props> = ({
  value = '',
  onChangeHandler = () => {},
  placeholder = '',
}) => {
  const [showLabel, toggleShowLabel] = useState<boolean>(false);

  const onBlurHandler = () => {
    toggleShowLabel(false);
  };

  const onFocusHandler = () => {
    toggleShowLabel(true);
  };

  return (
    <>
      <Label showLabel={showLabel}>メールアドレス</Label>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
    </>
  );
};

const Label = styled.div<{ showLabel: boolean }>`
  visibility: ${props => (props.showLabel ? 'visible' : 'hidden')};
  font-size: ${Size.FONT.SMALL}px;
  color: ${Color.THEME.PRIMARY};
  padding: 0 5px;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: ${Color.FONT.BASE};
  letter-spacing: 1.5px;
  border-radius: 2px;
  padding: 0 5px;
  outline: none;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${Color.FONT.LIGHT};

  &::placeholder {
    color: ${Color.FONT.LIGHT};
  }

  &:focus {
    border-bottom: 2px solid ${Color.THEME.PRIMARY};
  }

  &:focus::placeholder {
    color: transparent;
    transition: 0.2s;
  }
`;

export default TextInput;
