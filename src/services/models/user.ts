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
