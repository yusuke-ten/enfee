import { AxiosInstance } from 'axios';
import AxiosFactory, { ApiConfig } from 'utils/axios';
import { NotImplementError } from 'utils/errors';

class AxiosBase {
  axiosInstance: AxiosInstance;

  constructor(optionConfig?: ApiConfig) {
    this.axiosInstance = AxiosFactory.getInstance(optionConfig);
  }

  call() {
    throw new NotImplementError('call method is must implement.');
  }
}

export default AxiosBase;
