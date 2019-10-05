import React, { FC } from 'react';
import styled from 'styled-components';
import { Color } from 'src/const';

export type InputType = 'password' | 'text';

interface Props {
  type?: InputType;
  value: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler?: () => void;
  onFocusHandler?: () => void;
  isError?: boolean;
  small?: boolean;
}

const TextInput: FC<Props> = ({
  type = 'text',
  value = '',
  onChangeHandler = () => {},
  onBlurHandler = () => {},
  onFocusHandler = () => {},
  placeholder = '',
  isError = false,
  small = false,
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
      isError={isError}
      small={small}
      {...props}
    />
  );
};

const StyledInput = styled.input<{ isError?: boolean; small: boolean }>`
  width: 100%;
  height: ${props => (props.small ? '30px' : '40px')};
  font-size: ${props => (props.small ? '12px' : '14px')};
  color: ${Color.FONT.BASE};
  letter-spacing: 1.5px;
  border-radius: 2px;
  padding: 0 5px;
  outline: none;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid
    ${props => (props.isError ? Color.THEME.ERROR : Color.FONT.LIGHT)};

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
