import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
// import isInt from 'validator/lib/isInt';
// import isIn from 'validator/lib/isIn';
// import isURL from 'validator/lib/isURL';

export const minLength = (min: number) => (value: string) => {
  return value.length < min;
};

export const maxLength = (max: number) => (value: string) => {
  return value.length > max;
};

export const validationEmail = (value: string): string => {
  if (!isEmail(value)) return '無効なメールアドレスです';

  return '';
};

export const validationPassword = (value: string) => {
  if (isEmpty(value)) return '入力必須項目です';
  if (!isAlphanumeric(value)) return '英数字で入力してください';
  if (minLength(6)(value)) return '6文字以上で入力してください';

  return '';
};

export const required = (value: string) => {
  const errorMessage = !isEmpty(value) ? '' : '入力必須項目です';

  return errorMessage;
};
