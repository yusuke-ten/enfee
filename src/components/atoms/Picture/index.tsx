import React from 'react';
import styled from 'styled-components';
import { Color } from 'src/const';

interface Props {
  src: string | null;
}

const Picture: React.FC<Props> = ({ src }) => <StyledImage src={src} />;

const StyledImage = styled.span<{ src: string | null }>`
  background-image: url(${props => props.src});
  display: inline-block;
  background-color: ${Color.BACKGROUND.BASE};
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border: 1px solid ${Color.BACKGROUND.BASE};
  background-size: cover;
`;

export default Picture;
