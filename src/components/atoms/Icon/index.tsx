import React from 'react';
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
  <img src={mappedImages[icon]} alt={icon} height={height} width={width} />
);

export default Icon;
