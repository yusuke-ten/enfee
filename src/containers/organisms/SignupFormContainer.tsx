import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SignupForm from 'components/organisms/SignupForm';

const LoginFormContainer: React.FC = () => {
  const [emailValue, updateEmail] = useState('');
  const [passwordValue, updatePasswrod] = useState('');
  const [passwordConfirmationValue, updatePasswordConfirmation] = useState('');

  const disabledSubmitButton =
    emailValue.length === 0 ||
    passwordValue.length === 0 ||
    passwordConfirmationValue.length === 0;

  const dispatch = useDispatch();

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateEmail(e.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updatePasswrod(e.target.value);
    },
    [],
  );

  const onChangePasswordConfirmation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updatePasswordConfirmation(e.target.value);
    },
    [],
  );

  const onSubmit = useCallback(() => {
    const submitState = {
      email: emailValue,
      password: passwordValue,
      passwordConfirmation: passwordConfirmationValue,
    };
    console.log(`submit. value: ${submitState}`);
  }, []);

  return (
    <SignupForm
      {...{
        onChangeEmail,
        onChangePassword,
        onChangePasswordConfirmation,
        onSubmit,
        emailValue,
        passwordValue,
        passwordConfirmationValue,
        disabledSubmitButton,
      }}
    />
  );
};

export default LoginFormContainer;
