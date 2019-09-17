import React from 'react';
import yummyIcon from './icons/yummy.png';
import treasureIcon from './icons/treasure.png';

export type InfoIconType = 'yummy' | 'treasure';

interface Props {
  icon: InfoIconType;
  height?: number;
  width?: number;
}

const mappedImages: { [P in InfoIconType]: string } = {
  yummy: yummyIcon,
  treasure: treasureIcon,
};

const InfoIcon: React.FC<Props> = ({ icon, height = 35, width = 35 }) => (
  <img src={mappedImages[icon]} alt={icon} height={height} width={width} />
);

export default InfoIcon;
