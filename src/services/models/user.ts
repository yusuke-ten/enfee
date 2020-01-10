import { Store } from './store';

export interface User {
  id: number;
  displayName: string;
  loginName: string;
  imageUrl: string;
}

export interface MyProfileInAside {
  imageUrl: string;
  displayName: string;
  loginName: string;
  statsList: {
    heading: 'レビュー' | 'フォロー' | 'フォロワー';
    amount: number;
  }[];
}

export interface UserProfile {
  id: number;
  displayName: string;
  loginName: string;
  imageUrl: string;
  profile: string;
  followerCount: number;
  followingCount: number;
  reviewCount: number;
  isFollowing: boolean;
  loveStore: {
    id: number;
    name: Store;
  } | null;
}
