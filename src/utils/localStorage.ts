import config from 'src/config';

const { localstrageTokenKey } = config;

export const getToken = () => {
  const token = localStorage.getItem(localstrageTokenKey);

  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem(localstrageTokenKey, token);
};

export const removeToken = () => {
  localStorage.removeItem(localstrageTokenKey);
};
