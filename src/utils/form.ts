/* eslint no-restricted-syntax: 0 */
export const createFormData = <T extends { [k: string]: any }>(params: T) => {
  const formData = new FormData();

  for (const key in params) {
    if ({}.hasOwnProperty.call(params, key)) {
      formData.append(key, params[key]);
    }
  }

  return formData;
};
