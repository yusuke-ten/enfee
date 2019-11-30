import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from 'components/organisms/LoginForm';
import { login } from 'modules/auth/actions';
import { RootState } from 'modules/reducer';
import { validationEmail, validationPassword } from 'services/validation';

const LoginFormContainer = () => {
  const [emailValue, updateEmailValue] = useState('');
  const [passwrodValue, updatePasswrodValue] = useState('');
  const [emailValidationError, updateEmailValidationError] = useState('');
  const [passwordValidationError, updatePasswordValidationError] = useState('');

  const disabledSubmitButton =
    emailValue.length === 0 || passwrodValue.length === 0;

  const dispatch = useDispatch();

  const { isLoading, loginErrorMessage, isError } = useSelector(
    (state: RootState) => state.auth,
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
    const emailValidationErrorMessage = validationEmail(emailValue);
    const passwordValidationErrormessage = validationPassword(passwrodValue);
    updateEmailValidationError(emailValidationErrorMessage);
    updatePasswordValidationError(passwordValidationErrormessage);
    if (!emailValidationErrorMessage && !passwordValidationErrormessage) {
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
        error: loginErrorMessage,
        isError,
      }}
    />
  );
};

export default LoginFormContainer;
