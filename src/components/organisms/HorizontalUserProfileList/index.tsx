import React from 'react';
import { LoadingContents } from 'components/molecules';
import HorizontalUserProfile from 'components/molecules/UserProfile/HorizontalUserProfile';
import { UserProfile } from 'services/models';

interface HorizontalUserProfileListProps {
  users: UserProfile[];
  isLoggedIn: boolean;
  isLoading: boolean;
  handleFollow: (loginName: string, isFollowing: boolean) => void;
}

const HorizontalUserProfileList: React.FC<HorizontalUserProfileListProps> = ({
  users,
  isLoggedIn,
  isLoading,
  handleFollow,
}) => {
  return (
    <>
      {isLoading ? (
        <LoadingContents height={160} spinnerSize={26} />
      ) : (
        <div>
          {users.map(userProfile => (
            <HorizontalUserProfile
              key={userProfile.id}
              userProfile={userProfile}
              isLoggedIn={isLoggedIn}
              handleFollow={handleFollow}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HorizontalUserProfileList;
