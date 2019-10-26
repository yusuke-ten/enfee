import { Reducer } from 'redux';
import { ReviewDetail, Review } from 'services/models';
import { ReviewAction, actionTypes } from './actions';

export interface ReviewState {
  form: {
    isPosting: boolean;
  };
  reiviews: {
    isLodading: boolean;
    data: Review[];
  };
  // reviewDetail: {
  //   isLoading: boolean;
  //   data: [];
  //   replyLoading: boolean;
  // };
  // reviewComments: {
  //   isLoading: boolean;
  //   data: [];
  // };
  selectedReviewId: number | null;
  isModal: boolean;
}

const initialState: ReviewState = {
  form: {
    isPosting: false,
  },
  reiviews: {
    isLodading: false,
    data: [],
  },
  selectedReviewId: null,
  isModal: false,
};

const reducer: Reducer<ReviewState, ReviewAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.POST_REVIEW_START:
      console.log('in reducer/post review start!');

      return { ...state, form: { isPosting: true } };
    case actionTypes.POST_REVIEW_SUCCESS:
      console.log('in reducer/post review success!');
      console.log('result data', action.payload.result);

      return { ...state, form: { isPosting: false } };
    case actionTypes.POST_REVIEW_FAIL:
      return { ...state, form: { isPosting: false } };
    case actionTypes.FETCH_REVIEW_LIST_START:
      return { ...state, reviews: { isLoading: true, ...state.reiviews.data } };
    case actionTypes.FETCH_REVIEW_LIST_SUCCESS:
      return {
        ...state,
        reviews: {
          isLoading: false,
          data: [...state.reiviews.data, ...action.payload.result],
        },
      };
    case actionTypes.FETCH_REVIEW_LIST_FAIL:
      return { ...state };
    case actionTypes.FETCH_REVIEW_DETAIL_START:
      return { ...state };
    case actionTypes.FETCH_REVIEW_DETAIL_SUCCESS:
      return { ...state };
    case actionTypes.FETCH_REVIEW_DETAIL_FAIL:
      return { ...state };
    case actionTypes.RESET_REVIEW_LIST:
      return { ...state, reviews: { ...state.reiviews, data: [] } };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
