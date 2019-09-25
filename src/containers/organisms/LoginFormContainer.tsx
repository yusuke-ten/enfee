import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm, { Props } from 'components/organisms/LoginForm';
import { login } from 'src/modules/app';
import { RootState } from 'src/modules';

const LoginFormContainer = () => {
  const [emailValue, updateEmailValue] = useState('');
  const [passwrodValue, updatePasswrodValue] = useState('');

  const disabledSubmitButton =
    emailValue.length === 0 || passwrodValue.length === 0;

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: RootState) => state.app);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateEmailValue(e.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updatePasswrodValue(e.target.value);
    },
    [],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      email: emailValue,
      password: passwrodValue,
    };
    dispatch(login.start(params));
  };

  return (
    <LoginForm
      {...{
        onChangeEmail,
        onChangePassword,
        onSubmit,
        emailValue,
        passwrodValue,
        disabledSubmitButton,
        isLoading,
      }}
    />
  );
};

export default LoginFormContainer;
