import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm, { Props } from 'components/organisms/LoginForm';
import { actionCreators } from 'src/modules/app';

const LoginFormContainer = () => {
  const [emailValue, updateEmailValue] = useState('');
  const [passwrodValue, updatePasswrodValue] = useState('');

  const disabledSubmitButton =
    emailValue.length === 0 || passwrodValue.length === 0;

  const dispatch = useDispatch();

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

  const onSubmit = useCallback(() => {
    const submitState = {
      email: emailValue,
      password: passwrodValue,
    };
    dispatch(actionCreators.loginStart(submitState));
    console.log('submit!!!');
  }, []);

  return (
    <LoginForm
      {...{
        onChangeEmail,
        onChangePassword,
        onSubmit,
        emailValue,
        passwrodValue,
        disabledSubmitButton,
      }}
    />
  );
};

export default LoginFormContainer;
