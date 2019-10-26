import { CreatorsToActions } from 'src/utils';

import {
  ReviewFormParams,
  ReviewDetail,
  FixedReviewDetail,
} from 'services/models';

/* action types */
export const actionTypes = {
  POST_REVIEW_START: 'REVIEW/POST_REVIEW_START',
  POST_REVIEW_SUCCESS: 'REVIEW/POST_REVIEW_SUCCESS',
  POST_REVIEW_FAIL: 'REVIEW/POST_REVIEW_FAIL',
} as const;

/* action creators */
export const postReview = {
  start: (params: ReviewFormParams) => ({
    type: actionTypes.POST_REVIEW_START,
    payload: { params },
  }),
  success: (result: FixedReviewDetail) => ({
    type: actionTypes.POST_REVIEW_SUCCESS,
    payload: { result },
  }),
  fail: () => ({
    type: actionTypes.POST_REVIEW_FAIL,
  }),
};

export type ReviewAction = CreatorsToActions<typeof postReview>;
