import AxiosFactory from 'utils/axios';
import { TimeoutError, ServerError } from 'src/utils/errors';
import { UserProfile } from 'services/models';

const axios = AxiosFactory.getInstance();

export const fetchMyProfile = async (token: string) => {
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await axios.get('/users/me', {
      headers,
    });

    if (response.status !== 200) {
      throw new ServerError('server error');
    }
    const result: UserProfile = response.data;

    return result;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    if (err instanceof ServerError) {
      throw new ServerError(err.message);
    }

    throw new Error(`unexpected error${err}`);
  }
};
