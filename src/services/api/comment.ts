import qs from 'qs';
import AxiosFactory, { createAuthHeader, createMultiPartHeader } from 'utils/axios';
import { TimeoutError, ServerError, UnauthorilzedError } from 'src/utils/errors';
import { Comment } from 'services/models';
import config from 'src/config';

const axios = AxiosFactory.getInstance();

export const fetchCommentsApi = async (reviewId: number): Promise<Comment[]> => {
  try {
    const response = await axios.get(`/reviews/${reviewId}/comments`);

    return response.data;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    throw err;
  }
};

export const postCommentApi = async (
  token: string,
  reviewId: number,
  comment: string,
): Promise<Comment> => {
  const headers = createAuthHeader(token);

  try {
    const response = await axios.post(
      `/reviews/${reviewId}/comments`,
      { comment },
      { headers },
    );

    if (response.status !== 200) {
      throw new ServerError('server error');
    }

    return response.data;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    if (err instanceof ServerError) {
      throw new ServerError(err.message);
    }

    throw err;
  }
};
