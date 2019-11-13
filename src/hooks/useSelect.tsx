import React, { useState, useCallback } from 'react';

const useSelect = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<{ value: unknown }>) => {
      setValue(e.target.value as string);
    },
    [value],
  );

  return { value, onChange };
};

export default useSelect;
