import { MyProfileInAside, UserProfile } from 'services/models';

export const myProfile: MyProfileInAside = {
  imageUrl:
    'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
  displayName: 'あおひろ',
  loginName: '@aohiro',
  statsList: [
    { heading: 'レビュー', amount: 30 } as const,
    { heading: 'フォロー', amount: 59 } as const,
    { heading: 'フォロワー', amount: 103 } as const,
  ],
};

export const profile: UserProfile = {
  id: 6,
  displayName: 'あおひろ',
  loginName: 'aohiro01',
  imageUrl:
    'http://pbs.twimg.com/profile_images/1130684542732230656/pW77OgPS_normal.png',
  followerCount: 0,
  followingCount: 0,
  reviewCount: 39,
  loveStore: { id: 1, name: 'セブン-イレブン' },
};
