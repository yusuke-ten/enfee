import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const AvatarCircle: React.FC<Props> = ({ src }) => <StyledImage src={src} />;

const StyledImage = styled.span<{ src: string }>`
  background-image: url(${props => props.src});
  display: inline-block;
  background-color: #ccc;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-size: cover;
  border-radius: 50%;
`;

export default AvatarCircle;
