import React from 'react';
import styled, { css } from 'styled-components';

type TipPosition = 'top' | 'bottom';

interface Props {
  children: JSX.Element[];
  tipPosition?: TipPosition;
}

const HoverTipInteraction: React.FC<Props> = ({
  children,
  tipPosition = 'top',
}) => {
  const newChildren = React.Children.map(children, child => {
    if (child.type.name === 'Tip') {
      const grandChild = React.Children.only(child.props.children);

      return (
        <StyledTip posision={tipPosition}>
          {React.cloneElement(grandChild)}
        </StyledTip>
      );
    }
    if (child.type.name === 'Marker') {
      const grandChild = child.props.children;

      return <StyledMarker>{React.cloneElement(grandChild)}</StyledMarker>;
    }

    return child;
  });

  return <RootContainer>{newChildren}</RootContainer>;
};

const getTipPositionStyle = (position: TipPosition) => {
  switch (position) {
    case 'top':
      return css`
        transform: translate(-50%, -100%) translateY(-10px);
      `;
    case 'bottom':
      return css`
        transform: translate(-50%, 100%) translateY(12px);
      `;
    default:
      return null;
  }
};

const RootContainer = styled.span`
  position: relative;
`;
const StyledTip = styled.span<{ posision: TipPosition }>`
  visibility: hidden;
  opacity: 0;
  transition: opacity 150ms;
  left: 50%;
  position: absolute;
  top: 0;
  white-space: nowrap;
  ${props => getTipPositionStyle(props.posision)}

  ${RootContainer}:hover & {
    display: inline-block;

    opacity: 1;
    visibility: visible;
  }
`;
const StyledMarker = styled.span`
  ${RootContainer} {
    background-color: #f6f6f6;
  }
`;

export default HoverTipInteraction;

export const Tip: React.FC = () => <span>これはレンダリングされないもの</span>;
export const Marker: React.FC = () => (
  <span>これはレンダリングされないもの</span>
);
