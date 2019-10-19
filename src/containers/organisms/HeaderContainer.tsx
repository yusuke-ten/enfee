import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules/index';
import { Header } from 'components/organisms';
import { logout } from 'modules/auth/actions';
import { userProfileInAsideSelector } from 'services/selectors';

const HeaderContainer: React.FC = () => {
  const dispatch = useDispatch();

  const {
    auth: { isLoggedIn },
    app: { myProfile },
  } = useSelector((state: RootState) => state);

  const handleLogout = useCallback(() => {
    dispatch(logout.start());
  }, []);

  return (
    <Header
      isLoggedIn={isLoggedIn}
      myProfile={userProfileInAsideSelector(myProfile)}
      handleLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
