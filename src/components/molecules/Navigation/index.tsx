import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Color, Size } from 'src/const';

interface Link {
  text: string;
  to: string;
}

interface Props {
  links: Link[];
}

const Navigation: React.FC<Props> = ({ links }) => {
  return (
    <List>
      {links.map(({ text, to }: Link) => (
        <ListItem key={to}>
          <StyledLink to={to}>{text}</StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  height: 100%;
  display: flex;
`;
const ListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const StyledLink = styled(NavLink)`
  height: 100%;
  font-size: ${Size.FONT_RATIO.BASE}rem;
  display: flex;
  align-items: center;
  color: ${Color.FONT.LESS};
  padding: 0 10px;

  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }

  &.active {
    text-decoration: underline;
    color: ${Color.FONT.DARK};
    font-weight: ${Size.FONT_WEIGHT.BOLD};
  }
`;

export default Navigation;
