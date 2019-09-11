import React, { FC } from 'react';
import TextInputComponent from './TextInput';

interface Props {
  type: 'inputText';
  [key: string]: any;
}

const Input: FC<Props> = props => {
  const { type } = props;

  switch (type) {
    case 'inputText':
      return <TextInputComponent {...props} />;
    default:
      return null;
  }
};

export default Input;
