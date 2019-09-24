import { Store } from './store';

export interface User {
  id: number;
  displayName: string;
  loginName: string;
  imageUrl: string;
}

export interface Comment {
  id: number;
  comment: string;
  likeCount: number;
  createdAt: string;
  replyCount: number;
  liked: boolean;
  user: User;
}

export interface ReviewDetail {
  id: number;
  productName: string;
  content: string;
  picturePath: string[] | null;
  rating: number;
  createdAt: string;
  price: number;
  storeName: Store;
  productCategoryName: string;
  user: User;
  comments: Comment[];
}
