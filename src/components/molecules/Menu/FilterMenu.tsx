import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

export interface FilterMenuProps {
  rightContent?: React.ReactNode;
  menus: string[];
  selected: string;
  handleSelect: (selectedMenu: string) => void;
  small?: boolean;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  menus,
  selected,
  handleSelect,
  rightContent,
  small = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FilterItems>
        {menus.map((m, i) => (
          <Item
            key={i}
            isCurrent={m === selected}
            small={small}
            onClick={() => handleSelect(m)}
          >
            {m}
          </Item>
        ))}
      </FilterItems>
      <RightContent>{rightContent}</RightContent>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid ${Color.BORDER.LIGHT};
  display: flex;
  padding: 0 12px;
`;
const FilterItems = styled.ul`
  display: flex;
`;
const Item = styled.li<{ isCurrent: boolean | undefined; small: boolean }>`
  cursor: pointer;
  color: ${Color.FONT.BASE};
  ${props =>
    props.small
      ? css`
          font-size: ${Size.FONT_RATIO.BASE}rem;
          padding: 12px 10px;
          margin-right: 8px;
        `
      : css`
          font-size: ${Size.FONT_RATIO.MEDIUM}rem;
          padding: 16px 20px;
          margin-right: 12px;
        `}
  ${props =>
    props.isCurrent &&
    css`
      border-bottom: 2px solid ${Color.THEME.PRIMARY};
      color: ${Color.THEME.PRIMARY};
      font-weight: 700;
    `}

  transition-duration: 0.1s;

  &:hover {
    border-bottom: 2px solid ${Color.THEME.PRIMARY};
    background-color: ${Color.BACKGROUND.BASE};
  }
`;
const RightContent = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export default FilterMenu;
