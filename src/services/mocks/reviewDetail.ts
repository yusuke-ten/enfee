import { ReviewDetail } from 'services/models';
import { comments } from './comments';

const reviewDetail: ReviewDetail = {
  id: 1,
  productName: '手巻おにぎり 熟成すじこ醤油漬け',
  content:
    'セブンイレブンさんから発売されています、そばめしおむすび。\nしっかりと味の染みたそばめしのおむすび。\n濃厚ソース味で好みの味わいです。\n\n手を汚さずに食べられるのもいいと思います(^ ^)。',
  picturePath: [
    'https://tblg.k-img.com/restaurant/images/Rvw/50462/640x640_rect_50462221.jpg',
    'https://image.entabe.jp/upload/20180411/images/IMG_0054.jpg',
  ],
  rating: 5,
  createdAt: '2019-09-20',
  price: 100,
  storeName: 'セブン-イレブン',
  productCategoryName: 'おにぎり',
  user: {
    id: 1,
    displayName: 'あおひろ',
    loginName: '@aohiro',
    profile: 'これはプロフィールです',
    imageUrl:
      'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
    followerCount: 0,
    followingCount: 0,
    reviewCount: 39,
    loveStore: {
      id: 1,
      name: 'セブン-イレブン',
    },
  },
  comments,
};

export default reviewDetail;
