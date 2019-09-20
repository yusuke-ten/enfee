import camelcaseKeys from 'camelcase-keys';
import Review from 'src/services/models/review';
import reviewData from './reviews.json';

type ReviewDataType = typeof reviewData;

const camelReviewList = reviewData.map(r => camelcaseKeys(r, { deep: true }));

// const reviewList = camelcaseKeys(reviewData, { deep: true });

// type TextType = typeof reviewList;

// export default {
//   reviewList,
// }
