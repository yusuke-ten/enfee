import AxiosFactory, { createAuthHeader } from 'utils/axios';
import { TimeoutError, ServerError, UnauthorilzedError } from 'src/utils/errors';
import { UserProfile, Review } from 'services/models';

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

export const fetchUserProfileApi = async (
  loginName: string,
  token: string | null,
): Promise<UserProfile> => {
  const headers = createAuthHeader(token || '');

  try {
    const response = await axios.get<{ data: UserProfile }>(`/users/${loginName}`, {
      headers,
    });

    return response.data;
  } catch (err) {
    throw err;
  }
};

export type UsersKind = 'followers' | 'following';

export const fetchUsersApi = async (
  loginName: string,
  target: UsersKind,
  token: string | null,
): Promise<UserProfile[]> => {
  const headers = createAuthHeader(token || '');

  try {
    const response = await axios.get<{ data: UserProfile[] }>(
      `/users/${loginName}/${target}`,
      { headers },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReviewsApi = async (loginName: string): Promise<Review[]> => {
  try {
    const response = await axios.get<{ data: Review[] }>(
      `/users/${loginName}/reviews`,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const followApi = async (
  loginName: string,
  token: string,
): Promise<void> => {
  const headers = createAuthHeader(token);

  try {
    await axios.post(`/users/${loginName}/follow`, null, { headers });
  } catch (error) {
    if (error instanceof UnauthorilzedError) {
      throw new UnauthorilzedError('Unauthorized Error.');
    }

    throw error;
  }
};

export const unfollowApi = async (
  loginName: string,
  token: string,
): Promise<void> => {
  const headers = createAuthHeader(token);

  try {
    await axios.delete(`/users/${loginName}/unfollow`, { headers });
  } catch (error) {
    if (error instanceof UnauthorilzedError) {
      throw new UnauthorilzedError('Unauthorized Error.');
    }

    throw error;
  }
};
