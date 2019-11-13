import React, { useState, useCallback } from 'react';

function useInputWithValidation<T>(
  defaultValue: string,
  callbackValidation: (value: T) => string,
) {
  const [value, setValue] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  const resetValue = useCallback(() => {
    setValue(defaultValue);
  }, []);

  const execValidate = useCallback(
    (inputValue: T): boolean => {
      const message = callbackValidation(inputValue);
      setErrorMessage(message);

      return message === '';
    },
    [errorMessage],
  );

  const resetError = useCallback(() => {
    setErrorMessage('');
  }, []);

  return {
    inputProps: { attrs: { value, onChange }, errorMessage },
    execValidate,
    resetValue,
    resetError,
  };
}

export type InputProps = Pick<
  ReturnType<typeof useInputWithValidation>,
  'inputProps'
>;

export default useInputWithValidation;
