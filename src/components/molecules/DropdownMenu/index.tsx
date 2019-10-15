import React from 'react';
import styled from 'styled-components';
import { CaretDownIcon, Tooltip } from 'components/atoms';

interface Props {
  titleContent: React.ReactNode;
  menuContent: React.ReactNode;
  top?: number;
  left?: number;
  allowPos?: 'topLeft' | 'topRight';
}

const Dropdown: React.FC<Props> = ({
  titleContent,
  menuContent,
  top = 30,
  left = -60,
  allowPos = 'topRight',
}) => {
  return (
    <Container>
      <Title>
        {titleContent}
        <CaretDownIcon color="gray" height={14} width={14} />
      </Title>
      <Menu top={top} left={left}>
        <Tooltip position={allowPos}>{menuContent}</Tooltip>
      </Menu>
    </Container>
  );
};

interface MenuPosition {
  top: number;
  left: number;
}

const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    margin-left: 6px;
  }
`;
const Menu = styled.div<MenuPosition>`
  display: none;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

  &:hover {
    display: block;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  &:hover ${Menu} {
    display: block;
  }

  &:hover svg {
    fill: white;
    stroke: white;
  }
`;

export default Dropdown;
