import React, { useState, useCallback } from 'react';

const useInput = (defaultVaue: string = '') => {
  const [value, setValue] = useState(defaultVaue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  const reset = useCallback(() => {
    setValue(defaultVaue);
  }, []);

  return { reset, props: { value, onChange } };
};

export type InputProps = ReturnType<typeof useInput>['props'];

export default useInput;
