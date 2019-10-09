import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { SearchIcon } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBox: React.FC<Props> = ({ handleSubmit, ...props }) => {
  const [isFocus, toggleFocus] = useState(false);

  return (
    <Container onSubmit={handleSubmit} {...props} isFocus={isFocus}>
      <Input
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
      />
      <ButtonWrapper>
        <Button type="submit">
          <SearchIcon height={11} width={11} color="gray" />
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const commonStyle = css`
  display: table-cell;
  vertical-align: middle;
`;

const Container = styled.form<{ isFocus: boolean }>`
  display: table;
  width: 100%;
  margin: 0 auto;
  table-layout: fixed;
  background-color: white;
  opacity: 0.7;

  ${p =>
    p.isFocus &&
    css`
      box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.7);
    `}
`;
const Input = styled.input`
  ${commonStyle}
  font-size: ${Size.FONT.XSMALL}px;
  color: ${Color.FONT.DARK};
  padding: 4px 8px;
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  vertical-align: middle;
  appearance: none;
  border: none;
  background-color: transparent;
  outline: none;
`;
const ButtonWrapper = styled.span`
  ${commonStyle}
  height: 30px;
  width: 30px;
`;
const Button = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    background-color: ${Color.THEME.ACCENT};

    & svg {
      color: white !important;
      fill: white;
      stroke: white;
    }
  }
`;

export default SearchBox;
