import { UserProfile } from 'services/models';

export const userProfile: UserProfile = {
  id: 1,
  displayName: 'あおひろ',
  loginName: 'aohiro01',
  profile: 'これはプロフィールです',
  imageUrl:
    'http://pbs.twimg.com/profile_images/1130684542732230656/pW77OgPS_normal.png',
  followerCount: 0,
  followingCount: 0,
  reviewCount: 39,
  isFollowing: true,
  loveStore: { id: 1, name: 'セブン-イレブン' },
};

export const userProfileList: UserProfile[] = new Array(8)
  .fill(userProfile)
  .reduce((users, current, idx) => [...users, { ...current, id: idx }], []);
