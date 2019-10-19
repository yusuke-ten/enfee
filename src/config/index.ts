// TODO:
// process.envの返り値の型をnode.d.tsでオーバーライドしたのでもっと簡単にかける

const commonConfig = {
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  basename: process.env.PUBLIC_PATH,
  isBrowser: typeof window !== 'undefined',
  apiUrl: '',
  baseUrl: '',
  timeoutMsec: 7000,
  localstrageTokenKey: '',
  twitterLoginUrl: '',
};

const developmentConfig = {
  apiUrl: 'http://localhost:3000/api',
  baseUrl: 'http://localhost:3377',
  localstrageTokenKey: 'enfee_dev',
  twitterLoginUrl: 'http://localhost:3000/api/auth/twitter',
};

const productionConfig = {
  apiUrl: '',
  baseUrl: '',
  localstrageTokenKey: 'enfee',
  twitterLoginUrl: '',
};

const testConfig = {};

type IEnv = 'development' | 'production' | 'test';

type IEnvConfig =
  | typeof developmentConfig
  | typeof productionConfig
  | typeof testConfig;

const getEnvConfig = (env: IEnv): IEnvConfig => {
  if (env === 'development') return developmentConfig;
  if (env === 'production') return productionConfig;
  if (env === 'test') return testConfig;

  return developmentConfig;
};

const envConfig = getEnvConfig(process.env.NODE_ENV || 'development');

export default { ...commonConfig, ...envConfig };
