import { Store } from './store';
import { User } from './user';

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
