import { Reducer } from 'redux';
import {
  ReviewDetail,
  Review,
  Comment,
  ProductCategoryList,
} from 'services/models';
import { ReviewAction, actionTypes } from './actions';

export interface ReviewState {
  form: {
    isPosting: boolean;
  };
  productCategory: {
    loaded: boolean;
    entities: ProductCategoryList;
  };
  reviews: {
    loaded: boolean;
    entities: Review[];
  };
  reviewDetail: {
    loaded: boolean;
    entities: ReviewDetail | null;
  };
  comments: {
    loaded: boolean;
    entities: Comment[];
  };
  selectedReviewId: number | null;
  isModal: boolean;
}

const initialState: ReviewState = {
  form: {
    isPosting: false,
  },
  productCategory: {
    loaded: false,
    entities: [],
  },
  reviews: {
    loaded: false,
    entities: [],
  },
  reviewDetail: {
    loaded: false,
    entities: null,
  },
  comments: {
    loaded: false,
    entities: [],
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
      return { ...state, form: { isPosting: true } };
    case actionTypes.POST_REVIEW_SUCCESS:
      return { ...state, form: { isPosting: false } };
    case actionTypes.POST_REVIEW_FAIL:
      return { ...state, form: { isPosting: false } };
    case actionTypes.FETCH_REVIEW_LIST_START:
      return {
        ...state,
        reviews: { loaded: true, ...state.reviews },
      };
    case actionTypes.FETCH_REVIEW_LIST_SUCCESS:
      return {
        ...state,
        reviews: {
          loaded: true,
          entities: state.reviews.entities.concat(action.payload.result),
        },
      };
    case actionTypes.FETCH_REVIEW_LIST_FAIL:
      return { ...state };
    case actionTypes.FETCH_REVIEW_DETAIL_START:
      return {
        ...state,
        reviewDetail: { loaded: false, entities: null },
      };
    case actionTypes.FETCH_REVIEW_DETAIL_SUCCESS:
      return {
        ...state,
        reviewDetail: { loaded: true, entities: action.payload.result },
      };
    case actionTypes.FETCH_REVIEW_DETAIL_FAIL:
      return { ...state };
    case actionTypes.FETCH_PRODUCT_CATEGORY_LIST_START:
      return { ...state, productCategory: { loaded: false, entities: [] } };
    case actionTypes.FETCH_PRODUCT_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        productCategory: {
          loaded: true,
          entities: action.payload.productCategoryList,
        },
      };
    case actionTypes.FETCH_PRODUCT_CATEGORY_LIST_FAIL:
      return { ...state, productCategory: { loaded: false, entities: [] } };
    case actionTypes.RESET_REVIEW_LIST:
      return { ...state, reviews: { loaded: false, entities: [] } };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
