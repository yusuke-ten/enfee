import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from 'components/organisms/LoginForm';
import { login } from 'src/modules/app';
import { RootState } from 'src/modules';
import { validationEmail, validationPassword } from 'services/validation';

const LoginFormContainer = () => {
  const [emailValue, updateEmailValue] = useState('');
  const [passwrodValue, updatePasswrodValue] = useState('');
  const [emailValidationError, updateEmailValidationError] = useState('');
  const [passwordValidationError, updatePasswordValidationError] = useState('');

  const disabledSubmitButton =
    emailValue.length === 0 || passwrodValue.length === 0;

  const dispatch = useDispatch();

  const { isLoading, error, isError } = useSelector(
    (state: RootState) => state.app,
  );

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
    updateEmailValidationError(validationEmail(emailValue));
    updatePasswordValidationError(validationPassword(passwrodValue));
    if (emailValidationError && passwordValidationError) {
      dispatch(login.start(params));
    }
  };

  return (
    <LoginForm
      {...{
        onChangeEmail,
        onChangePassword,
        onSubmit,
        emailValue,
        passwrodValue,
        emailValidationError,
        passwordValidationError,
        disabledSubmitButton,
        isLoading,
        error,
        isError,
      }}
    />
  );
};

export default LoginFormContainer;
