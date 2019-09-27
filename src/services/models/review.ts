import { Store } from './store';
import { User } from './user';

export interface Reaction {
  name: string;
  count: number;
  reacted: boolean;
}

export interface Review {
  id: number;
  productName: string;
  content: string;
  commentCount: number;
  picturePath: string | null;
  createdAt: string;
  rating: number;
  storeName: Store;
  productCategoryName: string;
  reactions: Reaction[] | null;
  user: User;
}

export default Review;
