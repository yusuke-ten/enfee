import React from 'react';
import styled from 'styled-components';
import { ReviewPostButton, UserProfileCard } from 'components/molecules';
import { MyProfileInAside } from 'services/models';

interface Props {
  myProfile: MyProfileInAside | null;
}

const Aside: React.FC<Props> = ({ myProfile }) => {
  return (
    <>
      <StyledReviewPostButton text="レビューを投稿する" />
      {myProfile && <UserProfileCard myProfile={myProfile} />}
    </>
  );
};

const StyledReviewPostButton = styled(ReviewPostButton)`
  margin-bottom: 20px;
`

export default Aside;
