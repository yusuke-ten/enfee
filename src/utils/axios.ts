import axios, { AxiosInstance } from 'axios';
import camelcaseKeys from 'camelcase-keys';
import config from 'src/config';

export interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: config.apiUrl,
  timeout: config.timeoutMsec,
};

class AxiosFactory {
  static axiosInstance: AxiosInstance | null = null;

  static getInstance(optionConfig?: ApiConfig) {
    if (this.axiosInstance === null) {
      this.axiosInstance = this.createAxiosInstance(optionConfig);
    }

    return this.axiosInstance;
  }

  static createAxiosInstance(optionConfig?: ApiConfig) {
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
  }
}

export const createAuthHeader = (token: string) => ({
  Authorization: `Bearer ${token}`,
});

export default AxiosFactory;
