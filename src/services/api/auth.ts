import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import config from 'src/config';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: config.apiUrl,
  timeout: 7000,
};

const createAxiosInstance = (optionConfig?: ApiConfig) => {
  const axiosConfig = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(axiosConfig);
  instance.interceptors.response.use(res => ({
    ...res,
    data: camelcaseKeys(res.data, { deep: true }),
  }));

  return instance;
};

export const loginApiFactory = (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  const loginApi = async (params: { email: string; password: string }) => {
    try {
      const response = await instance.post(`/login`, params);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      const result: { token: string } = response.data;

      return result;
    } catch (err) {
      throw err.response.data;
    }
  };

  return loginApi;
};
