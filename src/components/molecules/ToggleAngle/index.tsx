import React from 'react';
import styled from 'styled-components';
import { AngleDownIcon, AngleUpIcon } from 'components/atoms';
import { Color, Size } from 'src/const';

type Icon = 'up' | 'down';

interface Props {
  iconType: Icon;
  text: string;
}

const ToggleAngle: React.FC<Props> = ({ iconType = 'down', text }) => {
  const getIcon = (type: Icon) => {
    if (type === 'up') return AngleUpIcon;
    if (type === 'down') return AngleDownIcon;

    return AngleDownIcon;
  };

  const IconComponent = getIcon(iconType);

  return (
    <>
      <Text>{text}</Text>
      <span>
        <IconComponent height={16} width={16} color="gray" />
      </span>
    </>
  );
};

const Text = styled.span`
  padding-right: 3px;
  color: ${Color.FONT.BASE};
  font-size: ${Size.FONT.BASE}px;
`;

export default ToggleAngle;
