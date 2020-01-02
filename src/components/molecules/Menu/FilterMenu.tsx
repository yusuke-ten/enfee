import React from 'react';
import styled, { css } from 'styled-components';
import { Color, Size } from 'src/const';

export interface FilterMenuProps {
  rightContent?: React.ReactNode;
  menuItems: { text: string; isCurrent?: boolean }[];
  handleClick: () => void;
  small?: boolean;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  menuItems,
  rightContent,
  handleClick,
  small = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FilterItems>
        {menuItems.map((item, i) => (
          <Item
            key={i}
            isCurrent={item.isCurrent}
            small={small}
            onClick={handleClick}
          >
            {item.text}
          </Item>
        ))}
      </FilterItems>
      <RightContent>{rightContent}</RightContent>
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid ${Color.BORDER.LIGHT};
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
          font-size: ${Size.FONT_RATIO.BASE}rem;
          padding: 12px 16px;
        `}
  ${props =>
    props.isCurrent &&
    css`
      border-bottom: 2px solid ${Color.THEME.PRIMARY};
      color: ${Color.THEME.PRIMARY};
      font-weight: 700;
    `}

  &:hover {
    border-bottom: 2px solid ${Color.THEME.PRIMARY};
  }
`;
const RightContent = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export default FilterMenu;
