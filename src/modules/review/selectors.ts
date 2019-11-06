import { RootState } from 'modules/index';

export const selectReviews = (state: RootState) => state.review.reviews;
