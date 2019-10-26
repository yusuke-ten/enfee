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

/* about post review form types */

export interface PictureForm {
  id: number;
  url: string;
  file: File;
}

export interface ReviewFormParams {
  productName: string;
  content: string;
  pictures: PictureForm[];
  price: number;
  rating: number;
  storeId: number;
  productCategoryId: number;
}

export default Review;
