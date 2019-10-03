// TODO:
// process.envの返り値の型をnode.d.tsでオーバーライドしたのでもっと簡単にかける

const commonConfig = {
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  basename: process.env.PUBLIC_PATH,
  isBrowser: typeof window !== 'undefined',
  apiUrl: '',
  timeoutMsec: 7000,
};

const developmentConfig = {
  apiUrl: 'http://localhost:8080/api',
};

const productionConfig = {
  apiUrl: 'https://enfee',
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
