import React from 'react';
import { withInitialize } from 'containers/hocs';
import UsersTemplate from 'components/templates/UsersTemplate';

const UsersPage: React.FC = () => {
  return <UsersTemplate />;
};

export default withInitialize(UsersPage);
