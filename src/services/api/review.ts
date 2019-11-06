import qs from 'qs';
import AxiosFactory, {
  createAuthHeader,
  createMultiPartHeader,
} from 'utils/axios';
import {
  TimeoutError,
  ServerError,
  UnauthorilzedError,
} from 'src/utils/errors';
import {
  StoreItem,
  ProductCategoryItem,
  ReviewFormParams,
  FixedReviewDetail,
  Review,
} from 'services/models';
import config from 'src/config';

const axios = AxiosFactory.getInstance();

export const fetchStoreListApi = async () => {
  try {
    const response = await axios.get('/stores');

    if (response.status !== 200) {
      throw new ServerError('server error');
    }
    const result: StoreItem[] = response.data;

    return result;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    if (err instanceof ServerError) {
      throw new ServerError(err.message);
    }

    throw new Error('unexpected error');
  }
};

export const fetchProductCategoryListApi = async () => {
  try {
    const response = await axios.get('/product_categories');

    if (response.status !== 200) {
      throw new ServerError('server error');
    }
    const result: ProductCategoryItem[] = response.data;

    return result;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    if (err instanceof ServerError) {
      throw new ServerError(err.message);
    }

    throw new Error('unexpected error');
  }
};

export const postReviewApi = async (
  token: string,
  formParams: ReviewFormParams,
) => {
  const params = new FormData();

  const { pictures } = formParams;
  for (let i = 0; i < pictures.length; i += 1) {
    params.append(`pictures[${i}]`, pictures[i].file);
  }

  params.append('product_name', formParams.productName);
  params.append('content', formParams.content);
  params.append('price', String(formParams.price));
  params.append('rating', String(formParams.rating));
  params.append('store_id', String(formParams.storeId));
  params.append('product_category_id', String(formParams.productCategoryId));

  const headers = Object.assign(
    {},
    createAuthHeader(token),
    createMultiPartHeader(),
  );

  try {
    const response = await axios.post('/reviews', params, { headers });

    if (response.status !== 201) {
      throw new ServerError('server error');
    }

    const result: FixedReviewDetail = response.data;

    return result;
  } catch (err) {
    console.log('post review api error', err);

    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    if (err instanceof ServerError) {
      throw new ServerError(err.message);
    }

    throw new Error(`unexpected error: ${err}`);
  }
};

/* eslint @typescript-eslint/camelcase: 0 */
export interface FetchReviewListParams {
  page?: number;
  store?: string;
  category?: number;
}

export const fetchReviewListApi = async (
  queryParams: FetchReviewListParams = {},
) => {
  const per_page = config.defaultReviewListPerPage;
  const { page, store, category } = queryParams;

  try {
    const params = qs.stringify({ page, store, category, per_page });
    const response = await axios.get(`/reviews?${params}`);
    const result: Review[] = response.data;

    return result;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    if (err instanceof ServerError) {
      throw new ServerError(err.message);
    }

    throw new Error('unexpected error');
  }
};
