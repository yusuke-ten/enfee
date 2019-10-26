import React from 'react';
import { Link } from 'react-router-dom';
import { LauncherButton, PenIcon } from 'components/atoms';
import { Mobile, Default } from 'src/hooks/useMediaquery';

const PenLauncherButton: React.FC<{ to: string }> = ({ to }) => (
  <Link to={to}>
    <Mobile>
      <LauncherButton shadow small>
        <PenIcon width={14} height={14} />
      </LauncherButton>
    </Mobile>
    <Default>
      <LauncherButton shadow>
        <PenIcon width={18} height={18} />
      </LauncherButton>
    </Default>
  </Link>
);

export default PenLauncherButton;
