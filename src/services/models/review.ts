interface Reaction {
  name: string;
  count: number;
  reacted: boolean;
}

interface Review {
  id: number;
  productName: string;
  content: string;
  commentCount: number;
  picturePath: string | null;
  createdAt: string;
  rating: number;
  storeName: 'セブン-イレブン' | 'ローソン' | 'ファミリーマート';
  productCategoryName: string;
  reactions: Reaction[] | null;
  user: {
    id: number;
    displayName: string;
    loginName: string;
    imageUrl: string | null;
  };
}

export default Review;
