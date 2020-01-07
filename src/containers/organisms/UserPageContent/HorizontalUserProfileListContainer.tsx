import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HorizontalUserProfileList from 'components/organisms/HorizontalUserProfileList';
import { actions } from 'modules/user/actions';
import { RootState } from 'modules/reducer';
import { UsersKind } from 'services/api/user';

const useFetchUsers = (target: UsersKind) => {
  const dispatch = useDispatch();
  const { loginName } = useParams<{ loginName: string }>();

  useEffect(() => {
    dispatch(actions.fetchUsers.start(loginName, target));
  }, [target]);
};

const useStateProps = () => {
  const { isLoading, users } = useSelector((state: RootState) => state.user);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return { isLoading, users, isLoggedIn };
};

const HorizontalUserProfileListContainer: React.FC<{ target: UsersKind }> = ({
  target,
}) => {
  useFetchUsers(target);

  const passProps = {
    ...useStateProps(),
  };

  return <HorizontalUserProfileList {...passProps} />;
};

export default HorizontalUserProfileListContainer;
