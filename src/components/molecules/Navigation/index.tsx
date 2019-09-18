import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EnvelopeIcon, CommentsIcon, AlignLeftIcon } from 'components/atoms';
import { Color, Size } from 'src/const';

type LinkText = 'レビュー' | 'メッセージ' | 'コミュニティ';

export interface Link {
  text: LinkText;
  to: string;
}

interface Props {
  links: Link[];
}

const selectIconComponent = (linkText: LinkText) => {
  if (linkText === 'レビュー') return <AlignLeftIcon />;
  if (linkText === 'メッセージ') return <EnvelopeIcon />;
  if (linkText === 'コミュニティ') return <CommentsIcon />;

  return null;
};

const Navigation: React.FC<Props> = ({ links }) => {
  return (
    <List>
      {links.map(({ text, to }: Link) => (
        <ListItem key={to}>
          <StyledLink to={to}>
            <LinkText>{text}</LinkText>
            {selectIconComponent(text)}
          </StyledLink>
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
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  display: flex;
  align-items: center;
  color: ${Color.FONT.LESS};
  padding: 0 10px;

  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }

  &.active {
    box-sizing: border-box;
    font-weight: ${Size.FONT_WEIGHT.BOLD};
    border-top: 3px solid transparent;
    border-bottom: 3px solid ${Color.FONT.LESS};
  }
`;
const LinkText = styled.span`
  padding-right: 0.7rem;
`;

export default Navigation;
