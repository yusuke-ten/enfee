import React, { useState, useCallback } from 'react';
import Label from 'components/atoms/Label';
import Select, { SelectProps } from 'components/atoms/Select';

export type SelectFieldProps = SelectProps & {
  label: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  label,
  name,
  items,
  value,
  handleChange,
}) => {
  const [enter, setEnter] = useState(false);

  const onMouseLeave = useCallback(() => {
    setEnter(false);
  }, []);

  const onMouseEnter = useCallback(() => {
    setEnter(true);
  }, []);

  return (
    <>
      {label && <Label focus={enter}>{label}</Label>}
      <Select
        title={title}
        name={name}
        items={items}
        value={value}
        handleChange={handleChange}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      />
    </>
  );
};

export default SelectField;
