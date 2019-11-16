import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

export interface SmallSelectProps {
  title: string;
  selectItems: {
    id: number;
    name: string;
  }[];
  selectProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
}

const SmallSelect: React.FC<SmallSelectProps> = ({
  title,
  selectItems,
  selectProps,
}) => {
  return (
    <Container>
      <StyledSelect {...selectProps}>
        <option value="">{title}</option>
        {selectItems.map(item => (
          <option value={String(item.id)} key={item.id}>
            {item.name}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

const borderWidth = 1;
const demoGray = '#D6D6D6';
const demoPlaceholder = '#C7C7C7';

const selectFormReset = css`
  display: block;
  padding: 0;
  position: relative;

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
    font-size: ${Size.FONT_RATIO.SMALL}rem;
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
  width: 100%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none;

    border: 1px solid transparent;
    width: 0;
    height: 0;
    right: 12px;

    border-width: 7px 5.5px 0 5.5px;
    border-top-color: ${demoGray};
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    select {
      box-shadow: 0 2px 3px rgba(${Color.THEME.PRIMARY}, 0.1) inset;
      border-color: ${Color.THEME.PRIMARY};

      &:focus {
        outline-color: transparent;
      }
    }

    &::after {
      border-top-color: ${Color.THEME.PRIMARY};
    }
  }
`;

const StyledSelect = styled.select`
  cursor: pointer;
  border: ${borderWidth}px solid ${Color.FONT.LIGHT};
  border-radius: 0;
  font-weight: 400;
  color: inherit;
  padding: 0.6rem;
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

export default SmallSelect;
