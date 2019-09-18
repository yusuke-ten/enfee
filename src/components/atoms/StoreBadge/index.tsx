import React from 'react';
import styled, { css } from 'styled-components';
import { toStoreName, StoreType } from 'src/utils';
import { Color, Size } from 'src/const';

type Size = 'small' | 'medium';

interface Props {
  store: StoreType;
  size?: Size;
}

const StoreBadge: React.FC<Props> = ({ store, size = 'medium' }) => (
  <Wrapper {...{ store, size }}>{toStoreName(store)}</Wrapper>
);

const colors: { [k in StoreType]: string } = {
  sevenEleven: Color.STORE.SEVEN_ELEVEN,
  familyMart: Color.STORE.FAMILY_MART,
  lawson: Color.STORE.LAWSON,
};

const getSizebStyles = (size: Size) => {
  switch (size) {
    case 'medium':
      return css`
        padding: 6px 18px;
        font-size: ${Size.FONT_RATIO.XSMALL}rem;
      `;
    case 'small':
      return css`
        padding: 4px 8px;
        font-size: ${Size.FONT_RATIO.TINY}rem;
      `;
    default:
      return null;
  }
};

const Wrapper = styled.span<{ store: StoreType; size: Size }>`
  display: inline-block;
  color: ${Color.FONT.LESS};
  border-radius: 2px;
  background-color: ${props => colors[props.store]};
  ${props => getSizebStyles(props.size)}
`;

export default StoreBadge;
