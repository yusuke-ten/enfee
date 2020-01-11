import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

interface Props {
  height?: string;
  placeholder: string;
  value: string;
  handleChage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError?: boolean;
  onBlurHandler?: () => void;
  onFocusHandler?: () => void;
  name?: string;
}

const TextArea: React.FC<Props> = ({
  height = '200px',
  placeholder,
  value,
  handleChage,
  isError = false,
  onBlurHandler = () => {},
  onFocusHandler = () => {},
  name,
  ...props
}) => (
  <StyledTextArea
    height={height}
    isError={isError}
    value={value}
    onChange={handleChage}
    placeholder={placeholder}
    onBlur={onBlurHandler}
    onFocus={onFocusHandler}
    name={name}
    {...props}
  />
);

const StyledTextArea = styled.textarea<{ height: string; isError: boolean }>`
  width: 100%;
  min-height: 120px;
  height: ${props => props.height};
  border: 2px solid ${Color.FONT.LIGHT};
  box-shadow: none;
  overflow: hidden;
  color: ${Color.FONT.BASE};
  word-wrap: break-word;
  resize: none;
  /* transition: 0.3s ease; */
  padding: 0.8rem 0.4rem;
  font-size: ${Size.FONT_RATIO.MEDIUM}rem;
  box-sizing: border-box;

  ${props =>
    props.isError &&
    css`
      border: 2px solid ${Color.THEME.ERROR};
    `}

  &::placeholder {
    color: ${Color.FONT.LIGHT};
  }

  &:focus {
    outline: none;
    border: 2px solid ${Color.THEME.PRIMARY};
  }

  /* &:focus::placeholder {
    transition: 0.1s;
  } */
`;

export default TextArea;
