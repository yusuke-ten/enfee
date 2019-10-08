import AxiosFactory from 'utils/axios';
import { TimeoutError, ServerError } from 'src/utils/errors';
import { StoreItem, ProductCategoryItem } from 'services/models';

const axios = AxiosFactory.getInstance();

export const fetchStoreList = async () => {
  try {
    const response = await axios.post('/stores');

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
    const response = await axios.post('/product_categories');

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
