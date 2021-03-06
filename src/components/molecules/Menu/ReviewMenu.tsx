import React from 'react';
import styled from 'styled-components';
import { MenuItem } from 'components/atoms';

export interface FilteringLink {
  text: string;
  to: string;
}

interface ReviewMenuProps {
  links: FilteringLink[];
}

const ReviewMenu: React.FC<ReviewMenuProps> = ({ links }) => (
  <>
    {links.map(({ text, to }) => (
      <StyledMenuItem
        key={to}
        to={to}
        exact
        // search paramsまですべて一致している時にアクティブにするため
        isActive={(_, location) => location.pathname + location.search === `${to}`}
      >
        {text}
      </StyledMenuItem>
    ))}
  </>
);

const StyledMenuItem = styled(MenuItem)`
  margin-bottom: 8px;
`;

export default ReviewMenu;
