import React, { FC } from 'react';
import styled from 'styled-components';
// import Color from 'src/const/Color';
import Color from '../../../const/Color';

interface Props {
  value?: string;
  onChangeHandler?: () => void;
  placeholder?: string;
}

const TextInput: FC<Props> = ({
  value = '',
  onChangeHandler = () => {},
  placeholder = '',
}) => (
  <>
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  </>
);

const StyledInput = styled.input`
  width: 305px;
  height: 40px;
  font-size: 14px;
  color: ${Color.FONT.BASE};
  letter-spacing: 1.5px;
  border: 1px solid #cfcece;
  border-radius: 2px;
  padding: 0 5px;

  &::placeholder {
    color: ${Color.FONT.LIGHT};
  }
`;

export default TextInput;
