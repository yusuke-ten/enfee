import { UserProfile, MyProfileInAside } from 'services/models';

export const userProfileInAsideSelector = (
  u: UserProfile | null,
): MyProfileInAside | null => {
  if (u === null) return null;

  return {
    imageUrl: u.imageUrl,
    displayName: u.displayName,
    loginName: `@${u.loginName}`,
    statsList: [
      { heading: 'レビュー', amount: u.reviewCount },
      { heading: 'フォロー', amount: u.followingCount },
      { heading: 'フォロワー', amount: u.followerCount },
    ],
  };
};
