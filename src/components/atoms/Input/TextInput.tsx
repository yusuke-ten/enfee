import React, { FC } from 'react';
import styled, { css } from 'styled-components';
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
  vanish?: boolean;
  name?: string;
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
  vanish = true,
  name,
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
      vanish={vanish}
      name={name}
      {...props}
    />
  );
};

const StyledInput = styled.input<{
  isError?: boolean;
  small: boolean;
  vanish?: boolean;
}>`
  width: 100%;
  height: ${props => (props.small ? '30px' : '32px')};
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

  ${props =>
    props.vanish &&
    css`
      &:focus::placeholder {
        color: transparent;
        transition: 0.2s;
      }
    `}
`;

export default TextInput;
