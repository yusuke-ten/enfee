import React from 'react';
import styled from 'styled-components';
import yummyIcon from './icons/yummy.png';
import treasureIcon from './icons/treasure.png';

type Icon = 'yummy' | 'treasure';

interface Props {
  icon: Icon;
  height?: number;
  width?: number;
}

const mappedImages: { [P in Icon]: string } = {
  yummy: yummyIcon,
  treasure: treasureIcon,
};

const Icon: React.FC<Props> = ({ icon, height = 50, width = 50 }) => (
  <Wrapper src={mappedImages[icon]} alt={icon} height={height} width={width} />
);

const Wrapper = styled.img``;

export default Icon;
