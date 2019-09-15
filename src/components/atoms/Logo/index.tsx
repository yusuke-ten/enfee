import React from 'react';
import logo from './logo.png';

interface Props {
  height?: number;
}

const Logo: React.FC<Props> = ({ height = 38 }) => (
  <img src={logo} alt="logo" height={height} />
);

export default Logo;
