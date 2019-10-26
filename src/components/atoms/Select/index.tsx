import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

interface Item {
  id: number;
  name: string;
}

interface Props {
  title: string;
  name: string;
  items: Item[];
  value: number | string;
  handleChage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: number;
  isError?: boolean;
}

const Select: React.FC<Props> = ({
  title,
  name,
  items,
  value,
  handleChage,
  isError = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <StyledSelect
        name={name}
        value={String(value)}
        onChange={handleChage}
        isError={isError}
      >
        <option value="0">--- {title}を選択してください ---</option>
        {items.map(item => (
          <option value={String(item.id)} key={item.name}>
            {item.name}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

const borderWidth = 2;
const demoGray = '#D6D6D6';
const demoPlaceholder = '#C7C7C7';

const selectFormReset = css`
  display: block;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 2;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    font-size: ${Size.FONT_RATIO.MEDIUM}rem;
    outline: none;

    &:focus {
      background-color: transparent;
      outline: none;
    }
  }

  option {
    font-weight: normal;
  }
`;

const Container = styled.div`
  ${selectFormReset}

  color: ${Color.FONT.BASE};
  display: block;
  border-radius: 0;
  box-shadow: none;
  font-size: ${Size.FONT_RATIO.MEDIUM}rem;
  margin-top: 9px;
  margin-bottom: 15px;
  width: 100%;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none;

    border: 1px solid transparent;
    width: 0;
    height: 0;
    right: 16px;
  }

  &::before {
    bottom: 55%;
    border-width: 0 6.5px 8px 6.5px;
    border-bottom-color: ${demoGray};
  }

  &::after {
    border-width: 8px 6.5px 0 6.5px;
    border-top-color: ${demoGray};
    top: 55%;
  }

  &:hover {
    select {
      box-shadow: 0 2px 3px rgba(${Color.THEME.PRIMARY}, 0.1) inset;
      border-color: ${Color.THEME.PRIMARY};

      &:focus {
        outline-color: transparent;
      }
    }

    &::before {
      border-bottom-color: ${Color.THEME.PRIMARY};
    }

    &::after {
      border-top-color: ${Color.THEME.PRIMARY};
    }
  }
`;

const StyledSelect = styled.select<{ isError: boolean }>`
  cursor: pointer;
  border: ${borderWidth}px solid
    ${props => (props.isError ? Color.THEME.ERROR : Color.FONT.LIGHT)};
  border-radius: 0;
  font-weight: 400;
  color: inherit;
  padding: 0.9rem;
  line-height: normal;
  transition: border-color 0.1s ease, outline 0.1s ease;

  &:focus {
    box-shadow: 0 3px 4px rgba(skyblue, 0.3) inset;
    outline: ${borderWidth}px solid ${Color.THEME.PRIMARY};
    outline-offset: ${borderWidth}px;
  }

  &[disabled],
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:focus):invalid {
    color: ${demoPlaceholder};
  }
`;

export default Select;
