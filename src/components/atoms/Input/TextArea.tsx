import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

interface Props {
  height?: number;
  placeholder: string;
  value: string;
  handleChage: () => void;
  isError?: boolean;
}

const TextArea: React.FC<Props> = ({
  height = 200,
  placeholder,
  value,
  handleChage,
  isError = false,
  ...props
}) => (
  <StyledTextArea
    height={height}
    isError={isError}
    value={value}
    onChange={handleChage}
    placeholder={placeholder}
    {...props}
  />
);

const StyledTextArea = styled.textarea<{ height: number; isError: boolean }>`
  width: 100%;
  min-height: 120px;
  height: ${props => props.height}px;
  border: 1px solid transparent;
  box-shadow: none;
  overflow: hidden;
  color: ${Color.FONT.BASE};
  word-wrap: break-word;
  resize: none;
  transition: 0.3s ease;
  padding: 1rem;
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

  &:focus::placeholder {
    transition: 0.2s;
  }
`;

export default TextArea;
