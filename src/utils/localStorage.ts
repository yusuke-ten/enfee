import config from 'src/config';

export const getToken = () => {
  const token = localStorage.getItem(config.localstrageTokenKey);

  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem(config.localstrageTokenKey, token);
};
