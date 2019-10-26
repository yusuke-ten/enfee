import AxiosFactory, {
  createAuthHeader,
  createMultiPartHeader,
} from 'utils/axios';
import { TimeoutError, ServerError } from 'src/utils/errors';
import {
  StoreItem,
  ProductCategoryItem,
  ReviewFormParams,
  FixedReviewDetail,
} from 'services/models';

const axios = AxiosFactory.getInstance();

export const fetchStoreList = async () => {
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

export const fetchProductCategoryList = async () => {
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

export const postReview = async (
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

    console.log('post review api okok', result);

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
