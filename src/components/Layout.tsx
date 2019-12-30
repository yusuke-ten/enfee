import React, { FC, ReactNode } from 'react';
import useScrollTop from 'src/hooks/use-scrollTop';
import HtmlTitle from './HtmlTitle';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <HtmlTitle title={title} />
    {useScrollTop()}
    {children}
  </>
);

export default Layout;
