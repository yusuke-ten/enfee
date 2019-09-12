import React from 'react';
import styled from 'styled-components';
import yummyIcon from './icons/yummy.png';
import treasureIcon from './icons/treasure.png';

export type IconType = 'yummy' | 'treasure';

interface Props {
  icon: IconType;
  height?: number;
  width?: number;
}

const mappedImages: { [P in IconType]: string } = {
  yummy: yummyIcon,
  treasure: treasureIcon,
};

const Icon: React.FC<Props> = ({ icon, height = 35, width = 35 }) => (
  <Wrapper src={mappedImages[icon]} alt={icon} height={height} width={width} />
);

const Wrapper = styled.img``;

export default Icon;
