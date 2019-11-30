import { RootState } from 'src/modules/reducer';

export const selectReviews = (state: RootState) => state.review.reviews;
