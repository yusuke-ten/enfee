import React from 'react';
import styled, { css } from 'styled-components';
import { Store } from 'services/models/store';
import { Color, Size } from 'src/const';

type Size = 'small' | 'medium';
type StoreType = Store | 'INDEPENDENT';

interface Props {
  store: StoreType;
  size?: Size;
}

const StoreBadge: React.FC<Props> = ({ store, size = 'medium' }) => (
  <Wrapper {...{ store, size }}>
    {store === 'INDEPENDENT' ? '無所属' : store}
  </Wrapper>
);

const colors: { [key in StoreType]: string } = {
  'セブン-イレブン': Color.STORE.SEVEN_ELEVEN,
  ファミリーマート: Color.STORE.FAMILY_MART,
  ローソン: Color.STORE.LAWSON,
  INDEPENDENT: Color.STORE.INDEPENDENT,
};

const getSizebStyles = (size: Size) => {
  switch (size) {
    case 'medium':
      return css`
        padding-top: 6px;
        padding-bottom: 6px;
        width: 110px;
        font-size: ${Size.FONT_RATIO.XXSMALL}rem;
      `;
    case 'small':
      return css`
        padding-top: 4px;
        padding-bottom: 4px;
        width: 86px;
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
  text-align: center;
  ${props => getSizebStyles(props.size)}
`;

export default StoreBadge;
