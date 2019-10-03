import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReviewPostButton, UserProfileCard } from 'components/molecules';
import { MyProfileInAside } from 'services/models';

interface Props {
  myProfile: MyProfileInAside | null;
}

const Aside: React.FC<Props> = ({ myProfile }) => {
  return (
    <>
      <Link to="/reviews/new">
        <StyledReviewPostButton text="レビューを投稿する" />
      </Link>
      {myProfile && <UserProfileCard myProfile={myProfile} />}
    </>
  );
};

const StyledReviewPostButton = styled(ReviewPostButton)`
  margin-bottom: 20px;
`;

export default Aside;
