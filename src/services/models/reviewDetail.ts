import { Store } from './store';
import { User, UserProfile } from './user';
import { Rating } from './rating';

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
  rating: Rating;
  createdAt: string;
  price: number;
  storeName: Store;
  productCategoryName: string;
  user: UserProfile;
  // comments: (Comment & { replies: Comment[] })[];
  comments: Comment[];
}

export interface FixedReviewDetail {
  id: number;
  productName: string;
  content: string;
  // picturePath: string[] | null;
  picturePath: string | null;
  rating: Rating;
  createdAt: string;
  price: number;
  storeName: Store;
  productCategoryName: string;
  user: UserProfile;
  comments: (Comment & { replies: Comment[] })[];
}
