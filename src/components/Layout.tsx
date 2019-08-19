import React, { FC, ReactNode } from 'react';
import HtmlTitle from './HtmlTitle';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <HtmlTitle title={title} />
    {children}
  </>
);

export default Layout;
