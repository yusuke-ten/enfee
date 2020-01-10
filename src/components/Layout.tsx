import React, { FC, ReactNode } from 'react';
import useScrollTop from 'src/hooks/use-scrollTop';
import { HeaderContainer } from 'containers/organisms';
import HtmlTitle from './HtmlTitle';

interface LayoutProps {
  title: string;
  children: ReactNode;
  withHeader?: boolean;
}

const Layout: FC<LayoutProps> = ({ title, children, withHeader = false }) => (
  <>
    <HtmlTitle title={title} />
    {withHeader && <HeaderContainer />}
    {useScrollTop()}
    {children}
  </>
);

export default Layout;
