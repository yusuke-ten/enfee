import React from 'react';
import styled from 'styled-components';
import { MenuItem } from 'components/atoms';

export interface Link {
  text: string;
  to: string;
}

interface Props {
  links: Link[];
}

const ReviewMenu: React.FC<Props> = ({ links }) => (
  <>
    {links.map(({ text, to }) => (
      <StyledMenuItem key={to} to={to} exact>
        {text}
      </StyledMenuItem>
    ))}
  </>
);

const StyledMenuItem = styled(MenuItem)`
  margin-bottom: 8px;
`;

export default ReviewMenu;
