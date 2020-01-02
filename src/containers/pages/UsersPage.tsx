import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { withInitialize } from 'containers/hocs';
import UsersTemplate from 'components/templates/UsersTemplate';
import { fetchUserProfile } from 'modules/user/actions';

const UsersPage: React.FC = () => {
  const { loginName } = useParams<{ loginName: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile.start(loginName));
  }, []);

  return <UsersTemplate />;
};

export default withInitialize(UsersPage);
