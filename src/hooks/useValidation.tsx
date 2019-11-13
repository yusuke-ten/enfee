import { useState, useCallback } from 'react';

function useValidation<T>(
  callbackValidation: (value: T) => string,
): [string, (value: T) => boolean, () => void] {
  const [errorMessage, setErrorMessage] = useState('');

  const validate = useCallback(
    (value: T): boolean => {
      const message = callbackValidation(value);
      setErrorMessage(message);

      return message === '';
    },
    [errorMessage],
  );

  const resetError = useCallback(() => {
    setErrorMessage('');
  }, [errorMessage]);

  // return { errorMessage, validate, resetError };
  return [errorMessage, validate, resetError];
}

export default useValidation;
