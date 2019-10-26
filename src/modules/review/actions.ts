import { CreatorsToActions } from 'src/utils';

import {
  ReviewFormParams,
  ReviewDetail,
  FixedReviewDetail,
  Review,
} from 'services/models';

/* action types */
export const actionTypes = {
  POST_REVIEW_START: 'REVIEW/POST_REVIEW_START',
  POST_REVIEW_SUCCESS: 'REVIEW/POST_REVIEW_SUCCESS',
  POST_REVIEW_FAIL: 'REVIEW/POST_REVIEW_FAIL',
  RESET_REVIEW_LIST: 'REVIEW/RESET_REVIEW_LIST',
  FETCH_REVIEW_LIST_START: 'REVIEW/FETCH_REVIEW_LIST_START',
  FETCH_REVIEW_LIST_SUCCESS: 'REVIEW/FETCH_REVIEW_LIST_SUCCESS',
  FETCH_REVIEW_LIST_FAIL: 'REVIEW/FETCH_REVIEW_LIST_FAIL',
  FETCH_REVIEW_DETAIL_START: 'REVIEW/FETCH_REVIEW_DETAIL_START',
  FETCH_REVIEW_DETAIL_SUCCESS: 'REVIEW/FETCH_REVIEW_DETAIL_SUCCESS',
  FETCH_REVIEW_DETAIL_FAIL: 'REVIEW/FETCH_REVIEW_DETAIL_FAIL',
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

export const fetchReviewList = {
  start: ({ page }: { page: number | null }) => ({
    type: actionTypes.FETCH_REVIEW_LIST_START,
    paylaod: { page },
  }),
  success: (result: Review[]) => ({
    type: actionTypes.FETCH_REVIEW_LIST_SUCCESS,
    payload: { result },
  }),
  fail: () => ({
    type: actionTypes.FETCH_REVIEW_LIST_FAIL,
  }),
};

export const fetchReviewDetail = {
  start: (id: number) => ({
    type: actionTypes.FETCH_REVIEW_DETAIL_START,
    payload: { id },
  }),
  success: (result: ReviewDetail) => ({
    type: actionTypes.FETCH_REVIEW_DETAIL_SUCCESS,
    payload: { result },
  }),
  fail: () => ({
    type: actionTypes.FETCH_REVIEW_DETAIL_FAIL,
  }),
};

export const reset = {
  reviewList: () => ({
    type: actionTypes.RESET_REVIEW_LIST,
  }),
};

export type ReviewAction =
  | CreatorsToActions<typeof postReview>
  | CreatorsToActions<typeof fetchReviewList>
  | CreatorsToActions<typeof fetchReviewDetail>
  | CreatorsToActions<typeof reset>;
