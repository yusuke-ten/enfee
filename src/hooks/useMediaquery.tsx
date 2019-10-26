import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Size } from 'src/const';

interface Props {
  children: React.ReactNode;
}

export const Desktop: React.FC<Props> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: Size.BREAK_POINT.PC });

  return isDesktop ? <>{children}</> : null;
};

export const Tablet: React.FC<Props> = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: Size.BREAK_POINT.MOBILE,
    maxWidth: Size.BREAK_POINT.PC,
  });

  return isTablet ? <>{children}</> : null;
};

export const Mobile: React.FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: Size.BREAK_POINT.MOBILE });

  return isMobile ? <>{children}</> : null;
};

// not mobile (desktop or tablet)
export const Default: React.FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: Size.BREAK_POINT.MOBILE });

  return isMobile ? <>{children}</> : null;
};
